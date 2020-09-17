import React, { Component } from 'react';
import './App.css';
import Header from "./components/header/Header";
import HomeContainer from "./containers/HomeContainer";
import ServicesContainer from "./containers/SevicesContainer";
import ContactContainer from "./containers/ContactContainer";
import WorksContainer from "./containers/WorksContainer";
import ShopsContainer from "./containers/ShopsContainer";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
import LoginPage from "./components/loginSystem/LoginPage";
import Dashboard from "./components/customer/Dashboard";
import EditCustomerForm from "./components/customer/editCustomerForm";
import AdminHeader from "./components/header/AdminHeader";
import ProductForm from "./components/product/ProductForm";
import LoggedInCustomer from "./components/header/LoggedInCustomer";
import CustomerCart from "./components/customer/CustomerCart";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "Not Logged In",
      customer: {},
      cartId: {}
    }
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', {withCredentials: true})
        .then(res => {
          if (res.data.logged_in && this.state.loggedInStatus === "Not Logged In") {
            this.setState({
              loggedInStatus: "Logged In",
              customer: res.data.customer,
              cartId: res.data.cart
            })
          } else if (!res.data.logged_in && (this.state.loggedInStatus === "Logged In")) {
            this.setState({
              loggedInStatus: "Not Logged IN",
              customer: {},
              cartId: {}
            })
          }
        })
        .catch(error => console.log('api errors:', error))
  };

  componentDidMount() {
    this.loginStatus()
  }

  handleLogin = (data) => {
    this.setState({
      loggedInStatus: "Logged In",
      customer: data.customer
    })
  }

  handleLogout = () => {
    this.setState({
      loggedInStatus: "Not Logged In",
      customer: {}
    })
  }

  renderHeader = () => {
    if (this.state.customer.is_admin === true) {
      return <AdminHeader />
    } else if (this.state.customer.is_admin === false) {
      return <LoggedInCustomer />
    } else {
      return <Header />
    }
  }

  render() {
    console.log(this.state)
    return (
        <Router>
          <div>
            {this.renderHeader()}
            <Switch>
              <Route path="/"
                     exact
                     render={props => <HomeContainer {...props}
                                                     loggedInStatus={this.state.loggedInStatus} />}
              />
              <Route path="/services" component={ServicesContainer} />
              <Route path="/works" component={WorksContainer} />
              <Route path="/contact" component={ContactContainer} />
              <Route path="/shop" render={props => <ShopsContainer
                  {...props} currentUser={this.state.customer}
                  cartId={this.state.cartId}
                />}
              />
              <Route path="/login"
                     render={props => <LoginPage {...props}
                                                 handleLogin={this.handleLogin}
                                                 loggedInStatus={this.state.loggedInStatus}
                                                 handleLogout={this.handleLogout} />}
              />
              <Route
                exact
                path="/dashboard"
                render={props => <Dashboard {...props}
                                            loggedInStatus={this.state.loggedInStatus}
                                            currentUser={this.state.customer}
                                            handleLogout={this.handleLogout}
                />}
              />
              <Route
                path="/customer/:id/edit-profile"
                render={props => <EditCustomerForm {...props} currentUser={this.state.customer} />}
              />
              <Route
                  path="/add-product"
                  component={ProductForm}
              />
              <Route
                to="/cart"
                render={props => <CustomerCart
                    {...props}
                    cartId={this.state.cartId}
                />}
              />
            </Switch>
            <Footer/>
          </div>
        </Router>
    );
  };
}

export default App;
