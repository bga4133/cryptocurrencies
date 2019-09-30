import { API_REQUEST, API_FAILED, API_SUCCESS} from '../actionsTypes'

export const apiReducer = ( state = {} , action) => { 
    switch(action.type){
        case API_REQUEST:
            return{
                ...state
            };
        case API_SUCCESS:
            return{
                ...state,
                result:action.data
            };
        case API_FAILED:
            return{
                ...state,
                result:action
            };
            default:
                return state;
    }
};