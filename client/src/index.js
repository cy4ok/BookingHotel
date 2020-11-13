import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/HeaderMain/Header";
import SectionBg from "./components/HeaderMain/SectionBg";
import "./tailwind.output.css";
import "./index.css";
import Offer from "./components/Offer";
import SectionArtStudio from "./components/ArtStudio/ArtStudio";


// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <SectionBg />
    <Offer />
    <SectionArtStudio />
  </React.StrictMode>,
  document.getElementById("root")
);

//reportWebVitals();
