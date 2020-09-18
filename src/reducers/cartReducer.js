export function cartReducer(state = {
    cartLineItems: []
}, action) {
    switch (action.type) {
        case 'FETCH_CART_ITEMS':
            console.log(action.payload)
            return {
                ...state,
                cartLineItems: [...state.cartLineItems, ...action.payload]
            }
        case 'ADD_TO_CART':
            console.log(action.payload)
            return {
                ...state,
                cartLineItems: [...state.cartLineItems, action.payload]
            }
        case 'REMOVE_CART_ITEM':
            console.log(action.payload)
            return {
                ...state,
               cartLineItems:  state.cartLineItems.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}