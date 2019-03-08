//This file is where the actual state if going to go i.e the state that normally is in a (main) component
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types'
const initialState = {
    items: [],
    loading: false
}

//here we are exporting the state above with the necessary action to be done to it
export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }

        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }

        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        
        case ITEMS_LOADING:
            return{
                ...state,
                loading: true
            }
        
        default:
            return state;
    }
}