import React from 'react';
import deal from '../images/deals/deal.PNG'



const Deals = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <img src={deal} class=" rounded-lg shadow-2xl" />
                <div className='ml-40'>
                    <h1 class="text-xs lg:text-left text-center text-5xl font-extrabold">Flash Deals!</h1>
                    <p class="py-6 text-3xl font-extrabold text-secondary-focus">HURRY UP AND GET 25% DISCOUNT</p>
                    <button class="btn btn-secondary text-white mb-5">ADD TO CART</button>

                    <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
                        <div class="flex flex-col p-2 bg-neutral rounded-box text-white">
                            <span class="countdown font-mono text-5xl">
                                <span></span>
                            </span>
                            days
                        </div>
                        <div class="flex flex-col p-2 bg-neutral rounded-box text-white">
                            <span class="countdown font-mono text-5xl">
                                <span ></span>
                            </span>
                            hours
                        </div>
                        <div class="flex flex-col p-2 bg-neutral rounded-box text-white">
                            <span class="countdown font-mono text-5xl">
                                <span ></span>
                            </span>
                            min
                        </div>
                        <div class="flex flex-col p-2 bg-neutral rounded-box text-white">
                            <span class="countdown font-mono text-5xl">
                                <span ></span>
                            </span>
                            sec
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Deals;