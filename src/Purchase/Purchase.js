import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../Login/Firebase.init';

const Purchase = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [part, setPart] = useState({})
    const [user, loading, error] = useAuthState(auth);
    const [inputDisable, setInputDisable] = useState(false)


    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/parts/${id}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [id])
    const { _id, name, img, desc, available, price } = part;
    let { minOrder } = part;

    const amountRef = useRef()

    const [order, setOrder] = useState('')


    const [elementError, setElementError] = useState("")
    let orderError = <p className='text-xs text-red-500 '>Please enter element within range</p>



    // const handleIncrease = () => {
    //     setElementError('')
    //     const amount = parseInt(amountRef.current.value);

    //     if (amount >= minOrder && amount <= available) {
    //         setOrder(amount);
    //         amountRef.current.value = '';
    //     }
    //     else {
    //         setElementError(orderError)
    //     }

    // }

    const handleBooking = event => {
        event.preventDefault();
        const totalOrder = order.toString() || minOrder;
        const totalPrice = (!order ? price * minOrder : order * price).toString()
        const userName = user?.displayName
        const email = user?.email
        const phoneNumber = event.target.phone.value
        const productName = name;
        const address = event.target.phone.value;

        const orderBooking = {
            userName: userName,
            email: email,
            phoneNumber: phoneNumber,
            address: address,
            productName: productName,
            totalOrder: totalOrder,
            totalPrice: totalPrice
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast('Thank you for Ordering')
                }
            })
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value)
        console.log(value)

        if ((value + 1) <= parseInt(minOrder) || (value - 1) >= parseInt(available) || isNaN(value)) {
            setInputDisable(true)
            setElementError(orderError)
        }
        else {
            setInputDisable(false)
            setElementError('')
        }
    }



    return (
        <div className='max-w-7xl mx-auto px-8 '>

            <h1 className='font-bold'>Order Page</h1>
            <h1 className='font-bold uppercase'>Welcome {user.displayName}</h1>
            <div className='mt-20 lg:flex lg:justify-evenly justify-center items-center  '>
                <div class="card  bg-base-100 shadow-xl ">
                    <div class="card-body justify-center border items-center">
                        <h2 class="card-title">Your Order:{name}</h2>
                        <p className='font-black'>Price:${price}/unit</p>
                        <p>Total Price:${parseInt(!order ? minOrder : order) * parseInt(price)}</p>
                        <p>Minimum Order: {minOrder}</p>
                        <p>Max Order:{available}</p>
                        <p>Ordered:{!order ? minOrder : order}</p>

                        <label htmlFor="">Enter Quantity:</label>
                        <input
                            onChange={handleChange}
                            defaultValue={minOrder}
                            type="number" className='input input-bordered w-full max-w-xs font-black'

                        />
                        {
                            elementError ? elementError : ''
                        }


                        <figure className='md: w-1/2'><img src={img} alt={name} /></figure>
                    </div>
                </div>

                {/* Another Section  */}
                <div className='mt-5 lg:mt-0 flex  justify-center'>
                    <div className="card lg:w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-center text-2xl font-bold">Fill these to Checkout</h2>
                            <form onSubmit={handleBooking}>
                                <div className="form-control w-full max-w-xs mt-6">
                                    <input
                                        type="email"
                                        placeholder={user.email}
                                        disabled
                                        className="input input-bordered w-full max-w-xs font-black text-xs"
                                    />

                                </div>
                                <div className="form-control w-full max-w-xs mt-6">
                                    <input
                                        type="text"
                                        placeholder={user.displayName}
                                        disabled
                                        className="input input-bordered w-full max-w-xs font-black text-xs"
                                    />

                                </div>

                                <div className="form-control w-full max-w-xs mt-6">
                                    <input
                                        type="text"
                                        placeholder='Address'
                                        name='address'
                                        className="input input-bordered w-full max-w-xs"

                                    />
                                </div>

                                <div className="form-control w-full max-w-xs mt-6">
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        name='phone'
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                </div>
                                <div className="form-control w-full max-w-xs mt-6">
                                    <label htmlFor="Order">Ordered</label>
                                    <input
                                        type="text"
                                        placeholder={!order ? minOrder : order}
                                        className="input input-bordered w-full max-w-xs"
                                        disabled
                                    />
                                </div>

                                <input disabled={inputDisable} type="submit" className='btn w-full max-w-xs mt-6 btn-outline btn-secondary' value='Confirm Order'
                                />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Purchase;