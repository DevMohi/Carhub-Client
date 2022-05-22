import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../Login/Firebase.init';

const Purchase = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [part, setPart] = useState({})
    const [user, loading, error] = useAuthState(auth);


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
    console.log(order)


    let orderError = <p>Please enter element within range</p>
    const handleIncrease = () => {

        const amount = parseInt(amountRef.current.value);

        if (amount >= minOrder && amount <= available) {
            setOrder(amount);
        }
        else {
            console.log('errro')
        }


        // const updateQuantity = { quantity: increaseQuantity.toString() }
        // const url = `http://localhost:5000/parts/${id}`;
        // fetch(url, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(updateQuantity)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //     })
    }



    return (
        <div className='max-w-7xl mx-auto px-8'>
            <h1 className='font-bold'>Order Page</h1>
            <h1 className='font-bold uppercase'>Welcome {user.displayName}</h1>
            <div className='mt-20 lg:flex lg:justify-evenly justify-center items-center'>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Your Order:{name}</h2>
                        <p className='font-black'>Price:${price}/unit</p>
                        <p>Total Price:${parseInt(!order ? minOrder : order) * parseInt(price)}</p>
                        <p>Minimum Order: {minOrder}</p>
                        <p>Max Order:{available}</p>
                        <p>Ordered:{!order ? minOrder : order}</p>
                        {/* Modal  */}
                        <label for="quantity" class="btn modal-button text-xs">Change Quantity</label>

                        <div>
                            <input type="checkbox" id="quantity" class="modal-toggle" />
                            <div class="modal">
                                <div class="modal-box relative">
                                    <label for="quantity" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>



                                    <h3 className="font-bold text-lg text-secondary">Ordering for: {name}</h3>
                                    <div className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                                        <input type="number" name='' ref={amountRef} placeholder="Enter Amount" className="input input-bordered w-full max-w-xs" />
                                        <div className=''>
                                            <button className='btn btn-xs mr-2 ' onClick={handleIncrease}>Increase</button>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                    <figure><img src={img} alt={name} /></figure>
                </div>

                {/* Another Section  */}
                <div className=''>
                    <div className="card lg:w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-center text-2xl font-bold">Fill these to Checkout</h2>
                            <form>
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
                                        placeholder="Address"
                                        className="input input-bordered w-full max-w-xs"

                                    />
                                </div>

                                <div className="form-control w-full max-w-xs mt-6">
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                </div>

                                <input type="submit" className='btn w-full max-w-xs mt-6 btn-outline btn-secondary' value='Confirm Order' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Purchase;