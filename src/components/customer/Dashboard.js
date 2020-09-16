import React, {Component} from "react";
import Customer from "./customer";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteCustomer } from "../../actions/customerActions";
import Logout from "../loginSystem/Logout";
import axios from "axios";

class Dashboard extends Component {

    handleLogout = () => {
        axios.delete('http://localhost:3001/logout', {withCredentials: true})
            .then(res => {
                this.props.handleLogout()
            })
            .catch(error => {
                console.log("logout error:", error)
            })
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <h2>status: {this.props.loggedInStatus}</h2>
                <Customer deleteCustomer={this.props.deleteCustomer} currentUser={this.props.currentUser} />
                <Link
                    to={"customer/" + this.props.currentUser.id + "/edit-profile"}><button>Edit</button></Link>
                <Logout handleLogout={this.handleLogout} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        customers: state.customers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteCustomer: customerId => dispatch(deleteCustomer(customerId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);