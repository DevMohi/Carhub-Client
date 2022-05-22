import React from 'react';

const Review = ({ review }) => {
    const { _id, name, img, rating, desc } = review;
    return (
        <div class="card bg-base-100 shadow-xl text-center ">
            <div class="avatar flex justify-center">
                <div class="bg-neutral-focus text-neutral-content  rounded-full w-16 ">
                    <img cal src={img} alt="" />
                </div>
            </div>
            <div class="card-body">
                <h2 class="font-black">{name}</h2>
                <p>{desc}</p>
                <p>{rating}</p>
            </div>
        </div>
    );
};

export default Review;