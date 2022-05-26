import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import PartsCard from './PartsCard';

const Parts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch('https://mighty-bayou-71597.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <h1 className='text-5xl text-secondary-focus text-center my-10'>Best Selling Parts</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5  mt-10 mb-0 '>
                {
                    parts.length === 0 ? <Loading /> : parts.map(part => <PartsCard
                        key={part._id}
                        part={part}
                    ></PartsCard>)
                }

            </div>

            <div style={{ cursor: 'pointer' }} className='mt-3 flex justify-end mb-40'>
                <Link to='/seeparts'><btn className=' btn-link'>See All</btn></Link>
            </div>

        </div>
    );
};

export default Parts;