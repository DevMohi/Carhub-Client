import React from 'react';
import { useNavigate } from 'react-router-dom';
import notfound from '../images/404/notfound.png'

const NotFound = () => {
    const navigate = useNavigate()
    const handleHome = () => {
        navigate('/')
    }
    return (
        <div className='my-5'>
            <div className='flex justify-center notfound-image'>
                <img src={notfound} alt="" />
            </div>

            <div className='mb-5 flex justify-center'>
                <button onClick={handleHome} className='btn btn-secondary text-white  '><small>Go Home</small></button>
            </div>

        </div>
    );
};

export default NotFound;
// style="background-image: url(https://api.lorem.space/image/fashion?w=1000&h=800);">