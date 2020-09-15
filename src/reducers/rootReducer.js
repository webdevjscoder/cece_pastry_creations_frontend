import { combineReducers } from "redux";
import { customerReducer } from "./customerReducer";
import {productReducer} from "./productsReducer";

export default combineReducers({
    customer: customerReducer,
    product: productReducer
})