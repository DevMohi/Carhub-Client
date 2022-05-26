import React from 'react';

const Blogs = () => {
    return (
        <div className='mb-20'>
            <div class="card w-100 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 className='font-bold'>How will you improve the performance of a React Application?</h1>
                    <h1>Ans: Keep component state local when it's needed. Memorize React components to avoid undesired re-renders. React code splitting with dynamic import (). Moreover, To get the most out of React rendering, ensure components only get the props they require. </h1>
                </div>
            </div>
            <div class="card w-100 bg-base-100 shadow-xl mt-5">
                <div class="card-body">
                    <h1 className='font-bold'>What are the different ways to manage a state in a React application?</h1>
                    <h1>Ans: In a React application, there are four ways to maintain state. These are the following:
                        Local (UI) state - The data we handle in one or more components is referred to as local state.
                        Global (UI) state - Data that we handle across various components is referred to as global state.
                        Data from an external server that must be merged with our UI state is called server state.
                        URL state - Information found on our URLs, such as pathnames and query parameters.</h1>
                </div>
            </div>
            <div class="card w-100 bg-base-100 shadow-xl mt-5">
                <div class="card-body">
                    <h1 className='font-bold'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                    <h1>Ans: If you update the state directly, executing setState() later may just overwrite the update you did, and later when you want to update the state, it does not do so instantly.</h1>
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