export function customerReducer(state = {
    customers: [],
    customer: {},
    currentCustomer: {}
}, action) {
    switch (action.type) {
        case 'REGISTER_CUSTOMER':
            return {
                ...state,
                customers: [...state.customers, action.payload],
                currentCustomer: action.payload
            }
        case 'EDIT_CUSTOMER':
            return {
                ...state,
                customer: action.payload
            }
        case 'DELETE_CUSTOMER':
            return {
                customers: state.customers.filter(customer => customer.id !== action.payload.id)
            }
        default:
            return state;
    }
}