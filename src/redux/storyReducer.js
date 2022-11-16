import { 
    STORY_LOAD, 
    UPDATE_NUMBERS_OF_COMMENTS } from "./types";


const initialState = {
    story: {}, 
    numberOfComments: 0
}

export const storyReducer = (state = initialState, action) => {

    switch (action.type){
        case STORY_LOAD:
                return {
                    ...state, 
                    story: action.data, 
                    numberOfComments: action.data.descendants
                }
        
        case UPDATE_NUMBERS_OF_COMMENTS:
                return {
                    ...state, 
                    numberOfComments: action.descendants
                }
            
        default:
            return state;
    }

}