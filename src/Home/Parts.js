import React, { useEffect, useState } from 'react';
import PartsCard from './PartsCard';

const Parts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <h1 className='text-5xl text-secondary-focus text-center my-10'>Best Selling Parts</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5  mt-10'>
                {parts.map(part => <PartsCard
                    key={part._id}
                    part={part}
                ></PartsCard>)}
            </div>
        </div>
    );
};

export default Parts;