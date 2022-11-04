import { ALL_PRODUCTS_REQUEST, 
        ALL_PRODUCTS_SUCCES, 
        ALL_PRODUCTS_FAIL, 
        CLEAR_ERRORS } from "../constants/productConstants";  

export const productReducer = (state ={products:[]}, action)=>{
    switch(action.type){
        case ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }

        case ALL_PRODUCTS_SUCCES:
            return {
                loading: false,
                products: action.payload.products,
                cantidad: action.payload.cantidad
            }

        case ALL_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }

        default:
            return state;
    }


}