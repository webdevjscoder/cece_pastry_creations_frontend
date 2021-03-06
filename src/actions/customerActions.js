export function addNewCustomer(customerObj) {
    return (dispatch) => {
        let configurationObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(customerObj)
        };
        fetch('http://localhost:3001/customers', configurationObject)
            .then(res => res.json())
            .then(customer => dispatch({
            type: 'REGISTER_CUSTOMER',
            payload: customer
        }))
    }
}

export function editCustomer(customerObj) {
    return (dispatch) => {
        let configureObj = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(customerObj)
        };
        fetch(`http://localhost:3001/customers/${customerObj.id}`, configureObj)
            .then(res => res.json())
            .then(customer => dispatch({
                type: 'EDIT_CUSTOMER',
                payload: customer
            }))
    }
}

export function deleteCustomer(customerId) {
    return (dispatch) => {
        fetch(`http://localhost:3001/customers/${customerId}`, {method: "DELETE"})
            .then(res => res.json())
            .then(customer => dispatch({
                type: 'DELETE_CUSTOMER',
                payload: customer
            }))
    }
}