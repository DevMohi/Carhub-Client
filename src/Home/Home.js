import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSumary from './BusinessSumary';
import Deals from './Deals';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <BusinessSumary />
            <Deals />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;