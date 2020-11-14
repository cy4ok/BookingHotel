import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import "./tailwind.output.css";
import "./index.css";
import Offer from "./components/Offer";
import CorpOffer from "./components/CorpOffer/CorpOffer"

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Offer />
    <CorpOffer/>
  </React.StrictMode>,
  document.getElementById("root")
);

//reportWebVitals();
