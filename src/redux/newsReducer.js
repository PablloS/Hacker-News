import { NEWS_LOAD } from "./types";

const initialState = {
    news: []
}

export const newsReducer = (state = initialState, action) => {
    console.log("newsReducer", action);

    switch (action.type){
        case NEWS_LOAD:

                return {
                    ...state, 
                    news: action.data
                }
            
        default:
            return state;
    }

}