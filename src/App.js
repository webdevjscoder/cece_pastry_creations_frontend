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
// import SignUpForm from "./components/loginSystem/SignUpForm";
// import LoginForm from "./components/loginSystem/LoginForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "Not Logged In",
      customer: {}
    }
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', {withCredentials: true})
        .then(res => {
          if (res.data.logged_in && this.state.loggedInStatus === "Not Logged In") {
            console.log("You are logged in!")
            this.setState({
              loggedInStatus: "Logged In",
              customer: res.data.customer
            })
          } else if (!res.data.logged_in && (this.state.loggedInStatus === "Logged In")) {
            console.log("You are not logged in")
            this.setState({
              loggedInStatus: "Not Logged IN",
              customer: {}
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

  render() {
    return (
        <Router>
          <div>
            <Header currentUser={this.state.customer}/>
            <Switch>
              <Route path="/"
                     exact
                     render={props => <HomeContainer {...props}
                                                     loggedInStatus={this.state.loggedInStatus} />}
              />
              <Route path="/services" component={ServicesContainer} />
              <Route path="/works" component={WorksContainer} />
              <Route path="/contact" component={ContactContainer} />
              <Route path="/shop" component={ShopsContainer} />
              <Route path="/login"
                     render={props => <LoginPage {...props}
                                                 handleLogin={this.handleLogin}
                                                 loggedInStatus={this.state.loggedInStatus}
                                                 handleLogout={this.handleLogout} />}
              />
            </Switch>
            <Footer/>
          </div>
        </Router>
    );
  };
}

export default App;
