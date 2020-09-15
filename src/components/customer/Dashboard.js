import React, {Component} from "react";
import Customer from "./customer";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteCustomer } from "../../actions/customerActions";

class Dashboard extends Component {

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <h2>status: {this.props.loggedInStatus}</h2>
                <Customer deleteCustomer={this.props.deleteCustomer} currentUser={this.props.currentUser} />
                <Link
                to={"customer/" + this.props.currentUser.id + "/edit-profile"}>Edit</Link>
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