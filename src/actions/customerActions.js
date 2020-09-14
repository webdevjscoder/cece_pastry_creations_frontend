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
            type: 'ADD_CUSTOMER',
            payload: customer.data
        }))
    }
}

export function editCustomer(customerObj) {
    console.log(customerObj)
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
                payload: customer.data
            }))
    }
}

export function deleteCustomer(customerId) {
    console.log(customerId)
    return (dispatch) => {
        fetch(`http://localhost:3001/customers/${customerId}`, {method: "DELETE"})
            .then(res => res.json())
            .then(customer => dispatch({
                type: 'DELETE_CUSTOMER',
                payload: customer.data
            }))
    }
}