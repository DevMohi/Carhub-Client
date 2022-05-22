import React, { useEffect } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useForm } from "react-hook-form";
import google from '../images/icons/google.png'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './Firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    if (user || gUser) {
        navigate(from, { replace: true })
    }
    // variable declare kore niba error dekaite chaile 
    let signInError;
    if (error || gError) {
        signInError = <p className='text-red-500 '><small>
            {error?.message || gError?.message}</small></p>
    }
    if (loading || gLoading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);
        reset(data)
    }

    return (
        <div className='flex justify-center mt-20'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                }
                                {errors.email?.type === 'pattern' &&
                                    <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                }

                            </label>
                        </div>
                        {/* password field  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Must be 6 characters or longer"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                }
                                {errors.password?.type === 'minLength' &&
                                    <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                }

                            </label>
                        </div>
                        {
                            signInError
                        }
                        <input type="submit" className='btn w-full max-w-xs btn-secondary text-white  font-bold' value='Login' />
                    </form>
                    <p><small>
                        New to Car Hub ?<Link className='text-primary' to='/signup'>Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => { signInWithGoogle() }}
                        className="btn btn-outline font-bold ">
                        <span className='mr-1'><img src={google} alt="" /></span>
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;