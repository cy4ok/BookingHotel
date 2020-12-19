import React from 'react';
import Header from "../components/Header/Header"
import TermsOfUseSection from "../components/TermsOfUse/TermsOfUseSection"

const TermsOfUsePage = () => {
    return (
        <div>
          <Header title="Пользовательское соглашение"/>
          <TermsOfUseSection/> 
        </div>
    );
};

export default TermsOfUsePage;