import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import SectionBg from './components/SectionBg';
import "./tailwind.output.css";
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <SectionBg/>
   
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
