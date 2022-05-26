import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div class="card w-100 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 className='font-bold'>How will you improve the performance of a React Application?</h1>
                    <h1>Ans: </h1>
                </div>
            </div>
            <div class="card w-100 bg-base-100 shadow-xl mt-5">
                <div class="card-body">
                    <h1 className='font-bold'>What are the different ways to manage a state in a React application?</h1>
                    <h1>Ans: </h1>
                </div>
            </div>
            <div class="card w-100 bg-base-100 shadow-xl mt-5">
                <div class="card-body">
                    <h1 className='font-bold'>How does prototypical inheritance work?</h1>
                    <h1>Ans: Prototypical Inheritance means that object and methods can be shared, extended and copied.To put this another way, prototype inheritance is the ability to access object properties from another object.To add new properties and methods to an existing object constructor, we utilize a JavaScript prototype.We can tell our JS code to inherit properties from a prototype in this way.Through a reference pointer function, prototypical inheritance allows us to reuse properties or methods from one JavaScript object to another.  </h1>
                </div>
            </div>
            <div class="card w-100 bg-base-100 shadow-xl mt-5">
                <div class="card-body">
                    <h1 className='font-bold'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <h1>Ans: At first we need to declare a state to store the array , next we have to run useEffect , inside that we have to fetch the array, once the array is fetched and set into the state, the next step will be to map through the array. The mapping will give you each product. Now for the search implementation you can simply use find function to get the name that is equal to the mapped products name, and this will give you the result </h1>
                </div>
            </div>
            <div class="card w-100 bg-base-100 shadow-xl mt-5">
                <div class="card-body">
                    <h1 className='font-bold'> What is a unit test? Why should write unit tests?</h1>
                    <h1>Ans: This is a sort of software testing in which the smallest testable module of an application, such as functions, procedures, or interfaces, is tested to see if it is fit for use.This testing is performed to confirm that the developer's source code fits the requirement and acts as intended.
                        The purpose of unit testing is to break down each piece of source code and ensure that it functions correctly.If any set of input is passed to a function or process, it should return the intended result. </h1>
                </div>
            </div>
        </div>
    );
};

export default Blogs;