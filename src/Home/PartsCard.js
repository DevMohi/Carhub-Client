import React from 'react';

const PartsCard = ({ part }) => {
    const { _id, name, img, desc, minOrder, available, price } = part;
    return (
        <div class="card mb-40 bg-base-100 shadow-xl">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {name}
                    <div class="badge badge-accent text-white">NEW</div>
                </h2>
                <p>{desc}</p>
                <div class="card-actions justify-between items-center">
                    <div>
                        <div class="badge badge-accent text-white mr-1 font-xl ">Min:<span>{minOrder}</span></div>
                        <div class="badge badge-accent text-white">Available : {available}</div>
                    </div>
                    <button class="btn btn-secondary ">Purchase</button>
                </div>

            </div>
        </div>
    );
};

export default PartsCard;