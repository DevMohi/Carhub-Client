import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartsCard = ({ part }) => {
    const { _id, name, img, desc, minOrder, available, price } = part;
    const navigate = useNavigate();
    const handlePurchase = (id) => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {name}
                    <div class="badge badge-accent text-white">NEW</div>
                </h2>
                <p>{desc}</p>
                <p className='font-black'>Price:${price} per unit</p>
                <div class="card-actions justify-between items-center">
                    <div>
                        <div class="badge badge-accent text-white mr-1 font-xl ">Min:<span>{minOrder}</span></div>
                        <div class="badge badge-accent text-white">Available : {available}</div>
                    </div>
                    <button class="btn btn-secondary" onClick={() => handlePurchase(_id)}>Purchase</button>
                </div>

            </div>
        </div>
    );
};

export default PartsCard;