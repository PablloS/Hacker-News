import { NEWS_LOAD } from "./types";

const initialState = {
    news: []
}

export const newsReducer = (state = initialState, action) => {
    console.log("newsReducer", action);

    switch (action.type){
        case NEWS_LOAD:
            return(() => {

                const loadedNews = action.data.map(res => {
                    return {
                        title: res.title, 
                        rating: res.score, 
                        nick: res.by, 
                        date: res.time, 
                        id: res.id
                    }
                })

                return {
                    ...state, 
                    news: loadedNews
                }
            })();
            
        default:
            return state;
    }

}