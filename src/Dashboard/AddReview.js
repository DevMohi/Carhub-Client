import userEvent from '@testing-library/user-event';
import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../Login/Firebase.init';

const AddReview = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [imageURL, setImageURL] = useState("")
    const [loading, setLoading] = useState(false)

    const [user] = useAuthState(auth)
    const onSubmit = async data => {
        const review = {
            ...data,
            img: imageURL,
            name: user?.displayName
        }
        const res = await axios.post('http://localhost:5000/review', review);
        console.log(res)
        if (res.status === 200) {
            console.log('hello')
            toast('Review Added')
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
        <div className='flex justify-center mt-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Add Review</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder={user?.displayName}
                                className="input input-bordered w-full max-w-xs"
                                disabled
                            />

                        </div>
                        {/* review field  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Review</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                class=" input input-bordered input-lg w-full max-w-xs"

                                {...register("desc", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                }
                            </label>
                        </div>
                        {/* rating field  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Please Input a number within 5"
                                min='1'
                                max='5'
                                className="input input-bordered w-full max-w-xs"
                                {...register("rating", {
                                    required: {
                                        value: true,
                                        message: 'Rating is required'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                }
                            </label>
                            {/* for uploading image  */}
                            <label htmlFor='image'>
                                Upload Image
                            </label>
                            <input type="file"
                                id='image'
                                class="input input-bordered "
                                onChange={handleUploadImage}
                            />

                        </div>
                        <input
                            disabled={!imageURL ? true : false}
                            type="submit" className='btn w-full max-w-xs mt-4' value='Add Review' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;