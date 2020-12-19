import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// This one import will make Tailwind’s utility classes available to the entire app,
// no need to import it again elsewhere.
import "./tailwind.output.css";
import { ReactQueryDevtools } from "react-query-devtools";
import { queryCache, ReactQueryCacheProvider } from "react-query";
import MainPage from "./pages/MainPage";
import ApartmentsPage from "./pages/ApartmentsPage";
import ToClients from "./pages/ToClients";
import DiscountsPage from "./pages/DiscountsPage";
import Restaurant from "./pages/Restaurant";
import LoyaltyPage from "./pages/LoyaltyPage";
import ContactsPage from "./pages/ContactsPage";
import BookingPage from "./pages/BookingPage";
import OfficesPage from "./pages/OfficesPage";
import Footer from "./components/Footer";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import PolicyPage from "./components/Policy";
import AboutPage from "./pages/AboutPage";

import './mocks/handlers';

function App() {
  return (
    <React.StrictMode>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/restaurant" component={Restaurant} />
            <Route path="/apartments" component={ApartmentsPage} />
            <Route path="/booking" component={BookingPage} />
            <Route path="/to-clients" component={ToClients} />
            <Route path="/loyalty" component={LoyaltyPage} />
            <Route path="/discounts" component={DiscountsPage} />
            <Route path="/about" component={AboutPage} />
            {/* <Route path="/about" component={About} /> */}
            <Route path="/policy" component={PolicyPage} />
            <Route exact path="/contacts" component={ContactsPage} />
            <Route exact path="/offices" component={OfficesPage} />
            <Route exact path="/termsofuse" component={TermsOfUsePage} />
          </Switch>
          <Footer />
        </Router>
        <ReactQueryDevtools initialIsOpen />
      </ReactQueryCacheProvider>
    </React.StrictMode>
  );
}

export default App;
