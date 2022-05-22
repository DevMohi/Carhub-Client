import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-3xl font-extrabold text-secondary-focus mt-10'>REVIEWS</h1>
            <p className='text-center mb-5 font-bold mt-2'>This is What Our Customer Says!! </p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5  mt-10' data-aos='fade-right'
                data-aos-duration="1000"
                data-aos-delay="200">
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;