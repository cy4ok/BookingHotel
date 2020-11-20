import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// This one import will make Tailwind’s utility classes available to the entire app,
// no need to import it again elsewhere.
import "./tailwind.output.css";
import Contacts from "./components/Contacts";
import MainPage from "./pages/MainPage";
import ApartmentsPage from "./pages/ApartmentsPage";
import ToClients from "./pages/ToClients";
import DiscountsPage from "./pages/DiscountsPage";
import LoyaltyPage from "./pages/LoyaltyPage";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/apartments" component={ApartmentsPage} />
          <Route path="/booking" component={BookingPage} />
          <Route path="/to-clients" component={ToClients} />
          <Route path="/loyalty" component={LoyaltyPage} />
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
