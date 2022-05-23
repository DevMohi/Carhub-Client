import React from 'react';

const Review = ({ review }) => {
    const { _id, name, img, rating, desc } = review;
    return (


        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p className=''>{desc}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={img} alt="noob" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl">
                            {name}
                        </h4>
                        <p>Rating: {rating}/5</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Review;