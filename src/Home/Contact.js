import React from 'react';

const Contact = () => {
    return (
        <div class="mb-20">
            <div class="flex justify-evenly items-center flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Contact Us</h1>
                    <p class="py-6">Let us know if you want us to improve our website.Any feedback and criticism is Accepted.
                        <br />
                        Looking Forward to hearing From you guys</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Issue</span>
                            </label>
                            <input type="text" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Description</span>
                            </label>
                            <input type="text" placeholder="" class="input input-bordered input-lg w-full max-w-xs" />

                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-secondary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;