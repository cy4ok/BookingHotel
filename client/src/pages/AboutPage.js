import React from 'react';
import Footer from "../components/Footer";
import About from '../components/About/About';
import Header from '../components/Header';

const AboutPage = () => {
    return (
        <div id="AboutPage">
            <Header title="О компании" />
            <About /> 
            <Footer />
        </div>
    );
};

export default AboutPage;
