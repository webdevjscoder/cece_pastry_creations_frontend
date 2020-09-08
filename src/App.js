import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import HomeContainer from "./containers/HomeContainer";
import ServicesContainer from "./containers/SevicesContainer";
import ContactContainer from "./containers/ContactContainer";
import WorksContainer from "./containers/WorksContainer";
import ShopsContainer from "./containers/ShopsContainer";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/services" component={ServicesContainer} />
            <Route path="/works" component={WorksContainer} />
            <Route path="/contact" component={ContactContainer} />
            <Route path="/shop" component={ShopsContainer} />
          </Switch>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
