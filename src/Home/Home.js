import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSumary from './BusinessSumary';
import Deals from './Deals';

const Home = () => {
    return (
        <div>
            <Banner />
            <BusinessSumary />
            <Deals />
            <Footer />
        </div>
    );
};

export default Home;