import React from 'react';
import potfolio from '../images/portfolio/me.png'
import js from '../images/Technologies/js.png'
import react from '../images/Technologies/react.png'
import html from '../images/Technologies/html-5.png'
import bootstrap from '../images/Technologies/bootstrap.png'
import firebase from '../images/Technologies/firebase.png'
import mongodb from '../images/Technologies/mongodb.png'
import github from '../images/Technologies/github.png'
import node from '../images/Technologies/nodejs.png'
import css from '../images/Technologies/css.png'
import express from '../images/Technologies/express.png'
import project1 from '../images/projects/project1.PNG'
import project2 from '../images/projects/project2.PNG'
import project3 from '../images/projects/project3.PNG'
import icon1 from '../images/icons/github.png'
import icon2 from '../images/icons/linkedin.png'


const Portfolio = () => {
    return (
        <div className=''>
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={potfolio} class="max-w-sm rounded-lg mr-18" />
                <div className='lg:mr-64 mr-0'>
                    <h1 class="lg:text-3xl text-xl lg:text-left text-center font-bold">Mohammed Mohi Uddin</h1>
                    <h1 class="lg:text-3xl text-xl lg:text-left text-center font-bold text-secondary">Web <span className=''>Developer</span></h1>
                    <p class=" text-xl lg:text-left text-center mt-3">Email : <span className='underline '>webdevmohi@gmail.com</span></p>
                    <p className='text-xl lg:text-left text-center'>Educational Background : UCSI UNIVERSITY (2020-<span className='font-bold text-secondary'>Present</span>)</p>

                    <div className='flex mt-3 lg:justify-start justify-center'>
                        <a href="https://github.com/DevMohi" target='_blank'><img src={icon1} className='mr-3' alt="" /></a>
                        <a href="https://www.linkedin.com/in/mohammed-mohi-uddin-654412220/" target='_blank'><img src={icon2} alt="" /></a>
                    </div>
                </div>
            </div>
            <h1 className='text-center text-4xl mt-20  font-bold text-accent'>Technology List</h1>

            <div className='my-10 grid lg:grid-cols-5 grid-cols-3 gap-5  lg:gap-y-10 px-10'>

                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={bootstrap} alt="" />
                <img src={github} alt="" />
                <img src={js} alt="" />
                <img src={mongodb} alt="" />
                <img src={react} alt="" />
                <img src={firebase} alt="" />
                <img src={node} alt="" />
                <img src={express} alt="" />

            </div>

            <div className='mt-36 mb-20'>
                <h1 className='text-3xl text-center font-bold text-accent'>Projects</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5  mt-10'>
                    <div class="card  bg-base-100 shadow-xl">
                        <figure><img src={project1} alt="Stockz" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">StockZ</h2>
                            <p>If you want to view the project just click on the live link</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-secondary text-white"><a href="https://warehouse-project-f3584.web.app/">Live Link</a></button>
                            </div>
                        </div>
                    </div>

                    <div class="card  bg-base-100 shadow-xl">
                        <figure><img src={project2} alt="GainZ" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">GainZ</h2>
                            <p>If you want to view the project just click on the live link</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-secondary text-white"><a href="https://gains-bd2ce.web.app/">Live Link</a></button>
                            </div>
                        </div>
                    </div>

                    <div class="card  bg-base-100 shadow-xl">
                        <figure><img src={project3} alt="CarHub" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">LLC Convention Center</h2>
                            <p>If you want to view the project just click on the live link</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-secondary text-white"><a href="https://devmohi.github.io/Convention-Centre-Bootstrap/" target='_blank'>Live Link</a></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Portfolio;
// "https://api.lorem.space/image/movie?w=260&h=400"