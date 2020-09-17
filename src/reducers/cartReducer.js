export function cartReducer(state = {
    lineItems: [],
}, action) {
    switch (action.type) {
        case 'FETCH_CART_ITEMS':
            console.log(action.payload)
            return {
                ...state,
                lineItems: [...state.lineItems, ...action.payload]
            }
        case 'ADD_TO_CART':
            console.log(action.payload)
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        default:
            return state;
    }
}