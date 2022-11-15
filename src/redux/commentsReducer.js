import { COMMENTS_LOAD } from "./types";

const initialState = {
    comments: []
}

export const commentsReducer = (state = initialState, action) => {
    console.log("commentReducer", action);

    switch (action.type){
        case COMMENTS_LOAD:
            
            return {
                ...state, 
                comments: action.data
            }

        default:
            return state;
    }

}