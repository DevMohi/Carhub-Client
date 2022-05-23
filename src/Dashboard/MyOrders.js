import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Login/Firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([])

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyOrders(data))
        }
    }, [user])

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
                                {(orders.totalPrice) && <Link to={`/dashboard/payment/${orders._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrders;