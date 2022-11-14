import { COMMENTS_LOAD } from "./types";

const initialState = {
    comments: []
}

export const commentsReducer = (state = initialState, action) => {
    console.log("commentReducer", action);

    switch (action.type){
        case COMMENTS_LOAD:
            return(() => {

                const tempComments = action.data.map(res => {
                    return {
                        nick: res.by, 
                        date: res.time, 
                        id: res.id, 
                        text: res.text, 
                        kids: res.kids
                    }
                }) 

                return {
                    ...state, 
                    comments: tempComments 
                }
            })();
            
        default:
            return state;
    }

}