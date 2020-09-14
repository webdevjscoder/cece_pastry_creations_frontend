import React from "react";

const Customer = props => {

    return (
        <div>
            {Object.keys(props.currentUser).length !== 0 ?
            <div>
                <h3>Hello, {props.currentUser.first_name}</h3>
                <button onClick={() => props.deleteCustomer(props.currentUser.id)}>Delete</button>
            </div>
                :
                null
            }
        </div>
    )
}

export default Customer;