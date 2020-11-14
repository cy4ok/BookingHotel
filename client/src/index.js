import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import "./tailwind.output.css";
import "./index.css";
import Offer from "./components/Offer";
// import Loyalty from "./components/Loyalty";

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Offer />
    {/* <Loyalty /> */}

  </React.StrictMode>,
  document.getElementById("root")
);

//reportWebVitals();
