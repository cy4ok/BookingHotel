import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// This one import will make Tailwind’s utility classes available to the entire app,
// no need to import it again elsewhere.
import "./tailwind.output.css";
import Contacts from "./components/Contacts";
import Apartments from "./components/Apartments";
import MainPage from "./pages/MainPage";
import DiscountsPage from "./pages/DiscountsPage";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/apartments" component={Apartments} />
          {/* <Route path="/booking" component={Booking} /> */}
          {/* <Route path="/to-clients" component={ToClients} /> */}
          {/* <Route path="/loyalty" component={Loyalty} /> */}
          {/* <Route path="/restaurant" component={Restaurant} /> */}
          <Route path="/discounts" component={DiscountsPage} />
          {/* <Route path="/about" component={About} /> */}
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </React.StrictMode>
  );
}

export default App;
