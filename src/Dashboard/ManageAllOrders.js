import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allorder')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [allOrders])

    const handleShipped = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/allorder/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => res.json()).then(data => {
                console.log(data);
            })
    }

    return (
        <div>
            <h1>All orders : {allOrders.length}</h1>

            <Table className="table w-full">
                <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>Email</Th>
                        <Th>Product</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>

                    {
                        allOrders.map((order, index) => <>
                            <Tr>
                                <Th>{index + 1}</Th>
                                <Td className='text-center'>{order.email}</Td>
                                <Td className='text-center'>{order.productName}</Td>
                                <Td className='text-center'>{

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
                                            <button className='btn btn-error btn-xs'>Delete</button>
                                        </>
                                    }

                                </Td>
                            </Tr>



                        </>)
                    }

                </Tbody>
            </Table>
        </div>
    );
};

export default ManageAllOrders;