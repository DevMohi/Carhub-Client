import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../Login/Firebase.init';
import DeleteOrdersModal from './DeleteOrdersModal';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([])
    const navigate = useNavigate()
    const [orderId, setOrderId] = useState(null)

    useEffect(() => {
        if (user) {
            fetch(`https://mighty-bayou-71597.herokuapp.com/orders?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('res', res) 
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {

                    setMyOrders(data)
                })
        }
    }, [user, myOrders])

    const handleDelete = (id) => {

        console.log(id)
        fetch(`https://mighty-bayou-71597.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const remaining = myOrders.filter(order => order._id !== id)
                setMyOrders(remaining)
            })

    }

    return (
        < div className='mb-20' >
            <h1>My Orders: {myOrders.length}</h1>

            <Table className="table lg:w-full">
                <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>Email</Th>
                        <Th>Name</Th>
                        <Th>Ordered</Th>
                        <Th>Total Price</Th>
                        <Th>Payment</Th>
                    </Tr>
                </Thead>
                <Tbody>

                    {myOrders.map((orders, index) => <Tr>
                        <Th>{index + 1}</Th>
                        <Td>{orders.email}</Td>
                        <Td>{orders.productName}</Td>
                        <Td>{orders.totalOrder}</Td>
                        <Td>${orders.totalPrice}</Td>
                        <Td>
                            {(orders.totalPrice && !orders.paid) && <>
                                <Link to={`/dashboard/payment/${orders._id}`}><button className='btn btn-xs btn-success mr-1'>Pay</button></Link>


                                <label for="deleteOrder"
                                    onClick={() => setOrderId(orders._id)}
                                    className='btn btn-xs btn-error'>Delete</label>

                            </>}


                            {(orders.totalPrice && orders.paid && !orders.shipped) && <div>
                                <span className='btn btn-xs btn-accent mr-1'>Pending</span>
                                <p className='text-xs'>Transaction ID : {orders.transactionId}</p>
                            </div>}

                            {
                                orders.shipped && <div>
                                    <span className='btn btn-xs 
                                        btn-success mr-1'>Shipped</span>
                                    <p className='text-xs '>Transaction ID : {orders.transactionId}</p>
                                </div>
                            }



                        </Td>
                    </Tr>)}


                    {
                        orderId && <DeleteOrdersModal orderId={orderId}
                            handleDelete={handleDelete}
                        ></DeleteOrdersModal>
                    }
                </Tbody>
            </Table>
        </div>




    );
};

export default MyOrders;