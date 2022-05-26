import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../Login/Firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [profile, setProfile] = useState({})


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/profile/${user.email}`)
                .then(res => res.json())
                .then(data => setProfile(data))
        }
    }, [user, profile])

    const onSubmit = async data => {

        const profile = {
            name: user.displayName,
            email: user.email,
            ...data
        }
        console.log(profile)
        fetch(`http://localhost:5000/profile/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                }
            })

    };

    return (
        <div className='flex lg:flex-row '>
            <div>
                <div className='flex justify-center mt-20 mr-2'>
                    <div className='card w-96 bg-base-100 shadow-xl'>
                        <div className="card-body">
                            <h2 className="text-center text-2xl font-bold">My Profile</h2>
                            <label className="text-xl mt-3">Name</label>
                            <h1 className='text-xl font-bold'>{user.displayName}</h1>

                            <label className="text-xl mt-3">Email</label>
                            <h1 className='text-xl font-bold'>{user.email}</h1>

                            <label className="text-xl mt-3">Education</label>
                            <h1 className='text-xl font-bold'>{profile.education ? profile.education : 'Please Update Your profile'}</h1>

                            <label className="text-xl mt-3">Location</label>
                            <h1 className='text-xl font-bold'>
                                {profile.location ? profile.location : 'Please Update Your profile'}
                            </h1>


                            <label className="text-xl mt-3">Linkedin</label>
                            <h1 className='text-xl font-bold'>
                                {profile.social ? profile.social : 'Please Update Your profile'}
                            </h1>

                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-20'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder={user.displayName}
                                    className="input input-bordered w-full max-w-xs font-bold"
                                    disabled
                                />

                            </div>
                            {/* email field  */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder={user.email}
                                    className="input input-bordered w-full max-w-xs font-bold"
                                    disabled
                                />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Education</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Institute"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("education", {
                                        required: {
                                            value: true,
                                            message: 'Education is required'
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
                                    <span className="label-text">Location</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Location"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("location", {
                                        required: {
                                            value: true,
                                            message: 'Location is required'
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
                                    <span className="label-text">Linkedin</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Link"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("social", {
                                        required: {
                                            value: true,
                                            message: 'Link is required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors.name.message}</span>
                                    }
                                </label>
                            </div>


                            <input type="submit" className='btn w-full max-w-xs' value='Update Profile' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;