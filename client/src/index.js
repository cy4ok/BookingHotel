import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
//import HeaderBrown from "./components/HeaderBrown";
import "./tailwind.output.css";
import "./index.css";
import Offer from "./components/Offer";
//import Loyalty from "./components/Loyalty";

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Offer />

    {/* <HeaderBrown />
    <Loyalty /> */}

  </React.StrictMode>,
  document.getElementById("root")
);

//reportWebVitals();
