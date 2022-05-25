import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../Login/Firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user.email}`, {
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
    }, [user])

    const handleDelete = (id) => {

        console.log(id)
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const remaining = myOrders.filter(order => order._id !== id)
                setMyOrders(remaining)
            })

    }

    return (
        < div >
            <h1>My Orders: {myOrders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Ordered</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {myOrders.map((orders, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{orders.email}</td>
                            <td>{orders.productName}</td>
                            <td>{orders.totalOrder}</td>
                            <td>${orders.totalPrice}</td>
                            <td>
                                {(orders.totalPrice && !orders.paid) && <>
                                    <Link to={`/dashboard/payment/${orders._id}`}><button className='btn btn-xs btn-success mr-1'>Pay</button></Link>
                                    <label for="deleteOrder" className='btn btn-xs btn-error'>Delete</label>
                                    <input type="checkbox" id="deleteOrder" class="modal-toggle" />
                                    <div class="modal">
                                        <div class="modal-box relative">
                                            <label for="deleteOrder" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                            <h1>Are you sure?</h1>
                                            <div className='modal-action'>
                                                <label className='btn btn-error' for='deleteOrder' onClick={() => { handleDelete(orders._id) }}>Yes</label>
                                                <label className='btn btn-success' for='deleteOrder' >No</label>
                                            </div>
                                        </div>
                                    </div>
                                </>}


                                {(orders.totalPrice && orders.paid) && <div>
                                    <span className='btn btn-xs btn-outline mr-1'>Paid</span>
                                    <p className='text-xs'>Transaction ID : {orders.transactionId}</p>
                                </div>}



                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>



        </div >
    );
};

export default MyOrders;