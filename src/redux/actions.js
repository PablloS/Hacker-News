import { NEWS_LOAD } from "./types";


export function newsLoad() {
    return async dispatch => {
        const response = await fetch("https://hacker-news.firebaseio.com//v0/newstories.json?"); 
        const storiesId = await response.json(); 
        const data = []; 
        for (let i = 0; i < 10; i++) {
            const storiesItem = 
                await fetch(`https://hacker-news.firebaseio.com/v0/item/${storiesId[i]}.json?print=pretty`);
            const jsonItem = await storiesItem.json();
            data.push(jsonItem);
        }

        dispatch({
            type: NEWS_LOAD, 
            data: data
        })
    }
}