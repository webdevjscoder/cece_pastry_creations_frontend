export default function customerReducer(state = {
    customers: [],
    loggedInUser: {}
}, action) {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return {
                ...state,
                customers: [...state.customers, action.payload],
                loggedIn: true
            }
        case 'EDIT_CUSTOMER':
            return {
                customers: action.payload
            }
        case 'DELETE_CUSTOMER':
            console.log(action.payload)
            return {
                customers: state.customers.filter(customer => customer.id !== action.payload.id)
            }
        default:
            return state;
    }
}