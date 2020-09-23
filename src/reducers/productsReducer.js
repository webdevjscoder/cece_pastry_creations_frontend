export function productReducer(state = {
    items: [],
    successfulCreation: false,
    updatedSuccessfully: false
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
                items: state.items.map(item => item.id === action.payload.id ?  action.payload : item),
                updatedSuccessfully: true,
                count: state.count += action.payload.count
            }
        case 'DELETE_PRODUCT':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        case 'INCREMENT_COUNT':
            return {
                ...state,
                items: state.items.map(item => item.id === action.payload.id ? {...item, count: action.payload.count} : item)
            }
        case 'DECREMENT_COUNT':
            return {
                ...state,
                items: state.items.map(item => item.id === action.payload.id ? {...item, count: action.payload.count} : item)
            }
        default:
            return state;
    }
}