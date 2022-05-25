import userEvent from '@testing-library/user-event';
import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../Login/Firebase.init';

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [imageURL, setImageURL] = useState("")
    const [loading, setLoading] = useState(false)

    const [user] = useAuthState(auth)

    const onSubmit = async data => {
        console.log(data)
        const parts = {
            ...data,
            img: imageURL,

        }
        const res = await axios.post('http://localhost:5000/add-parts', parts);
        console.log(res)
        if (res.status === 200) {
            console.log('hello')
            toast('Parts Added')
        }
        reset()
        setImageURL("")
    };

    const handleUploadImage = event => {
        event.preventDefault()
        setLoading(true)

        const image = (event.target.files[0])
        const formData = new FormData()

        formData.set('image', image);
        axios.post("https://api.imgbb.com/1/upload?key=312cec85709bcf242a167c63ffe31854", formData)
            .then(res => {
                setImageURL(res.data.data.display_url)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='flex justify-center mt-5'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Add Products</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text"> Product Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Product Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.name.message}</span>
                                }
                            </label>
                        </div>


                        {/* for uploading image  */}
                        <div className="form-control w-full max-w-xs">
                            <label htmlFor='image'>
                                Upload Image
                            </label>
                            <input type="file"
                                id='image'
                                class="input input-bordered "
                                onChange={handleUploadImage}
                            />
                        </div>

                        {/* desc  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                class=" input input-bordered  w-full max-w-xs"

                                {...register("desc", {
                                    required: {
                                        value: true,
                                        message: 'Description is required'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                }
                            </label>
                        </div>

                        {/* minOrder  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Min Order</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Minimum Order"
                                className="input input-bordered w-full max-w-xs"
                                {...register("minOrder", {
                                    required: {
                                        value: true,
                                        message: 'Min order is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.name.message}</span>
                                }
                            </label>
                        </div>

                        {/* available          */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Available</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Quantity Available"
                                className="input input-bordered w-full max-w-xs"
                                {...register("available", {
                                    required: {
                                        value: true,
                                        message: 'Available Quantity required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.name.message}</span>
                                }
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Price/Unit"
                                className="input input-bordered w-full max-w-xs"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Price is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.name.message}</span>
                                }
                            </label>
                        </div>
                        <input
                            disabled={!imageURL ? true : false}
                            type="submit" className='btn w-full max-w-xs mt-4' value='Add Products' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;