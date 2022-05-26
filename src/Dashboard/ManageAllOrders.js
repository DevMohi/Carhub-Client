import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import AdminDeleteOrder from './AdminDeleteOrder';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([])
    const [manageId, setManageId] = useState(null)
    useEffect(() => {
        fetch('https://mighty-bayou-71597.herokuapp.com/allorder')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [allOrders])

    const handleShipped = (id) => {
        console.log(id)
        fetch(`https://mighty-bayou-71597.herokuapp.com/allorder/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => res.json()).then(data => {
                console.log(data);
            })
    }


    const handleDelete = (id) => {

        console.log(id)
        fetch(`https://mighty-bayou-71597.herokuapp.com/order-parts/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = allOrders.filter(parts => parts._id !== id)
                setAllOrders(remaining)
            })
    }

    return (
        <div>
            <h1>All orders : {allOrders.length}</h1>
            <div className='overflow-x-auto'>

                <Table className="table w-full">
                    <Thead>
                        <Tr>
                            <Th></Th>
                            <Th className='d-flex justify-center'>Email</Th>
                            <Th>Product</Th>
                            <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>

                        {
                            allOrders.map((order, index) => <>
                                <Tr>
                                    <Th>{index + 1}</Th>
                                    <Td>{order.email}</Td>
                                    <Td>{order.productName.slice(0, 10)}</Td>
                                    <Td>{

                                        (order.shipped) && <button className='btn btn-xs btn-success' onClick={() => handleShipped(order._id)}>Shipped</button>

                                    }
                                        {
                                            (order.paid && !order.shipped) && <button className='btn btn-xs btn-info'>Pending</button>
                                        }
                                        {

                                            (order.paid && !order.shipped) && <button className='btn btn-xs ml-3' onClick={() => handleShipped(order._id)}>Ship</button>
                                        }

                                        {
                                            !order.paid && <>
                                                <button className='btn btn-xs mr-3'>Unpaid</button>
                                                <label for="deleteParts2" onClick={() => setManageId(order._id)} className='btn btn-xs btn-error'>Delete</label>
                                            </>
                                        }

                                    </Td>
                                </Tr>



                            </>)
                        }
                        {
                            manageId && <AdminDeleteOrder manageId={manageId}
                                handleDelete={handleDelete}
                            ></AdminDeleteOrder>
                        }


                    </Tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageAllOrders;