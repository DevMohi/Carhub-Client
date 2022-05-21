import React from 'react';
import box from '../images/icons/box.png'
import client from '../images/icons/client.png'
import sales from '../images/icons/sales.png'
const BusinessSumary = () => {
    return (
        <div className='max-w-7xl mx-auto px-12'>
            <h1 className='text-center text-3xl text-secondary mb-5 font-extrabold'>MILLIONS BUSINESS TRUST US</h1>
            <div class="lg:stats shadow lg:flex ">
                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <img src={box} alt="" />
                    </div>
                    <div class="stat-title text-secondary font-bold">Delivered</div>
                    <div class="stat-value">31K</div>
                    <div class="stat-desc font-bold">Jan 1st - Feb 1st</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <img src={client} alt="" />
                    </div>
                    <div class="stat-title text-secondary font-bold">Happy Clients</div>
                    <div class="stat-value">4,200</div>
                    <div class="stat-desc font-bold">↗︎ 900 (45%)</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <img src={sales} alt="" />
                    </div>
                    <div class="stat-title text-secondary font-bold">Sales</div>
                    <div class="stat-value">600K</div>
                    <div class="stat-desc font-bold">↗︎ 400 (25%)</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSumary;