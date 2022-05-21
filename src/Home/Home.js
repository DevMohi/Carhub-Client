import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSumary from './BusinessSumary';

const Home = () => {
    return (
        <div>
            <Banner />
            <BusinessSumary />
            <Footer />
        </div>
    );
};

export default Home;