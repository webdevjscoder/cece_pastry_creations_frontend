export function productReducer(state = {
    products: []
}, action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case 'EDIT_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case 'DELETE_CUSTOMER':
            return {
                products: state.products.filter(product => product.id !== action.payload)
            }
        default:
            return state;
    }
}