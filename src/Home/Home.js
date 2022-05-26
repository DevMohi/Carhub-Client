import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSumary from './BusinessSumary';
import Contact from './Contact';
import Deals from './Deals';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <BusinessSumary />
            <Deals />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;