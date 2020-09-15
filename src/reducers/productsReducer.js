export function productReducer(state = {
    items: [],
    successfulCreation: false
}, action) {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return {
                ...state,
                items: action.payload
            }
        case 'ADD_PRODUCT':
            console.log(action.payload)
            return {
                ...state,
                items: [...state.items, action.payload],
                successfulCreation: true
            }
        case 'EDIT_PRODUCT':
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case 'DELETE_CUSTOMER':
            return {
                items: state.items.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}