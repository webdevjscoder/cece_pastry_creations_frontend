export function cartReducer(state = {
    cartLineItems: [],
    addedProduct: false,
    removedProduct: false
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
                cartLineItems: [...state.cartLineItems, action.payload],
                addedProduct: true
            }
        case 'REMOVE_CART_ITEM':
            return {
                ...state,
               cartLineItems:  state.cartLineItems.filter(item => item.id !== action.payload),
               removedProduct: true
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