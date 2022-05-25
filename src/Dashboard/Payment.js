import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L1HgIDnRErumHNYCr9zlYHB5fzWoski6Q4V2OkIAYez1pOU7xrqXJqYkPfb18YU3wmHNNoKWyUhTWavX6Bol6pK00jQ0nortZ');

const Payment = () => {
    const { id } = useParams()
    console.log(id)
    const url = `http://localhost:5000/orders/${id}`
    const { data: booking, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    console.log(booking)
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success">Hello, {booking.userName}</p>
                    <h2 class="card-title">Pay For {booking.productName}</h2>
                    <p>Please Pay : ${booking.totalPrice}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm booking={booking} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;