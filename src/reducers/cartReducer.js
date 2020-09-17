export function cartReducer(state = {
    items: []
}, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        default:
            return state;
    }
}