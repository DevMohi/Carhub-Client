import React from 'react';

const Contact = () => {
    return (
        <div className="mb-20">
            <div className="flex justify-evenly items-center flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Contact Us</h1>
                    <p className="py-6">Let us know if you want us to improve our website.Any feedback and criticism is Accepted.
                        <br />
                        Looking Forward to hearing From you guys</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Issue</span>
                            </label>
                            <input type="text" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" placeholder="" className="input input-bordered input-lg w-full max-w-xs" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;