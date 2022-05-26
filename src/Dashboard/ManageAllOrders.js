import React, { useEffect, useState } from 'react';

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
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allOrders.map((order, index) => <>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.email}</td>
                                    <td>{order.productName}</td>
                                    <td>{

                                        (order.shipped) && <button className='btn btn-xs btn-success' onClick={() => handleShipped(order._id)}>Shipped</button>

                                    }
                                        {
                                            (order.paid && !order.shipped) && <button className='btn btn-xs' onClick={() => handleShipped(order._id)}>Pending</button>
                                        }

                                        {
                                            !order.paid && <>
                                                <button className='btn btn-xs mr-3'>Unpaid</button>
                                                <button className='btn btn-error btn-xs'>Delete</button>
                                            </>
                                        }

                                    </td>
                                </tr>



                            </>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;