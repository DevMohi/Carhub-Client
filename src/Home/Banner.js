import React from 'react';
import banner1 from '../images/banner/banner-1.png'
const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner1} class="max-w-sm rounded-lg shadow-2xl" />
                <div className='mr-0 lg:mr-40'>
                    <h1 class="lg:text-5xl text-xs lg:text-left text-center font-bold"
                        data-aos='fade-right'
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >New Technology and Build</h1>
                    <p class="py-6 lg:text-6xl text-xs lg:text-left text-center font-extrabold text-secondary"
                        data-aos='fade-right'
                        data-aos-duration="900"
                        data-aos-delay="400"
                    >Wheels and Tires <br /> Collections</p>
                    <button class="btn btn-accent text-white"
                        data-aos='fade-right'
                        data-aos-duration="800"
                        data-aos-delay="600"
                    >Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;