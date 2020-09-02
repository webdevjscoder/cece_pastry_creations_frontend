import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Service from "./components/service/Service";
import Contact from "./components/contact/Contact";
import Work from "./components/work/work";
import Shop from "./components/shop/Shop";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Service} />
            <Route path="/works" component={Work} />
            <Route path="/contact" component={Contact} />
            <Route path="/shop" component={Shop} />
          </Switch>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
