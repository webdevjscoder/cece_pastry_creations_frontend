// export function fetchCustomers() {
//     return (dispatch) => {
//         fetch("http://localhost:3001/customers")
//             .then(res => res.json())
//             .then(customers => console.log(customers))
//     }
// }

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

export function fetchCustomerToLogIn(customerObj) {
    console.log(customerObj)
    return (dispatch) => {
        let configureObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(customerObj)
        };
        fetch("http://localhost:3001/sessions", configureObj)
            .then(res => res.json())
            .then(customer => console.log(customer.data.id))
    }
}