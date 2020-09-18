export function cartReducer(state = {
    cartLineItems: []
}, action) {
    switch (action.type) {
        case 'FETCH_CART_ITEMS':
            return {
                ...state,
                cartLineItems: [...state.cartLineItems, ...action.payload]
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                cartLineItems: [...state.cartLineItems, action.payload]
            }
        case 'REMOVE_CART_ITEM':
            return {
                ...state,
               cartLineItems:  state.cartLineItems.filter(item => item.id !== action.payload)
            }
        case 'CLEAR_CART':
            return {
                ...state,
                cartLineItems: []
            }
        default:
            return state;
    }
}