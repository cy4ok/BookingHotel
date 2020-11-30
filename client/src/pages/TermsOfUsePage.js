import React from 'react';
import Header from "../components/Header/Header"
import TermsOfUseSection from "../components/TermsOfUse/TermsOfUseSection"
import Footer from "../components/Footer"
const TermsOfUsePage = () => {
    return (
        <div>
          <Header title="Пользовательское соглашение"/>
          <TermsOfUseSection/> 
          <Footer/> 
        </div>
    );
};

export default TermsOfUsePage;