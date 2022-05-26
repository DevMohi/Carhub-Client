import React, { useEffect, useState } from 'react';
import Review from '../Home/Review';

import quote from '../images/icons/quote.svg'
import Loading from '../Shared/Loading';

const SeeReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://mighty-bayou-71597.herokuapp.com/review')
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
                    reviews.length === 0 ? <Loading /> : reviews.map(review => <Review key={review._id}
                        review={review}
                    ></Review>).reverse()
                }
            </div>

        </section>
    );
};

export default SeeReviews;