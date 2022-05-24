import React, { useEffect, useState } from 'react';
import Review from './Review';
import quote from '../images/icons/quote.svg'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div><h4 className="text-xl text-secondary font-bold">Reviews</h4>
                    <h2 className="text-3xl">What our Customer Says</h2>
                </div>
                <div>
                    <img src={quote} alt="" className='w-24 lg:w-48 ' />
                </div>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
            <div style={{ cursor: 'pointer' }} className='mt-3 flex justify-end'>
                <btn className=' btn-link'>See All</btn>
            </div>
        </section>
    );
};

export default Reviews;