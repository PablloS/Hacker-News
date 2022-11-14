import { STORY_LOAD } from "./types";


const initialState = {
    story: {}
}

export const storyReducer = (state = initialState, action) => {
    console.log("storyReducer", action);

    switch (action.type){
        case STORY_LOAD:
            return(() => {

                const tempStory = {
                    title: action.data.title, 
                    rating: action.data.score, 
                    nick: action.data.by, 
                    date: action.data.time, 
                    id: action.data.id, 
                    url: action.data.url, 
                    commentsId: action.data.kids
                }

                return {
                    ...state, 
                    story: tempStory
                }
            })();
            
        default:
            return state;
    }

}