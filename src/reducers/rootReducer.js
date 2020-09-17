import { combineReducers } from "redux";
import { customerReducer } from "./customerReducer";
import {productReducer} from "./productsReducer";
import { cartReducer } from "./cartReducer";

export default combineReducers({
    customers: customerReducer,
    products: productReducer,
    carts: cartReducer
})