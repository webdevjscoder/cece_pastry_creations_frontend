export default function customerReducer(state = {
    customers: [],
    loggedInUser: {}
}, action) {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            console.log({customers: [...state.customers, action.payload]});
            return {
                ...state,
                customers: [...state.customers, action.payload],
                loggedIn: true
            }
        case 'LOGIN_USER':
            const customer = state.customers.map(customer => customer.id === action.payload)
            console.log(customer)
            return {
                ...state.loggedInUser, customer
            }
        default:
            return state;
    }
}