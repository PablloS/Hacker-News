import { COMMENTS_LOAD, NEWS_LOAD, STORY_LOAD, UPDATE_NUMBERS_OF_COMMENTS } from "./types";


export function newsLoad() {
    return async dispatch => {
        const response = await fetch("https://hacker-news.firebaseio.com//v0/newstories.json?"); 
        const storiesId = await response.json(); 
        const data = []; 

        for (let i = 0; i < 100; i++) {
            data.push(
                fetch(`https://hacker-news.firebaseio.com/v0/item/${storiesId[i]}.json?print=pretty`)
                    .then(response => response.json()));
        }

        Promise.all(data).then( values => {

            dispatch({
                type: NEWS_LOAD, 
                data: values
            })
        })

    }
}

export function storyLoad(id) {
    return async dispatch => {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
        const jsonData = await response.json(); 

        dispatch({
            type: STORY_LOAD, 
            data: jsonData
        })

        if (jsonData.kids !== undefined) {
            dispatch(commentsLoad(jsonData.kids));
        }
        else {
            dispatch({
                type: COMMENTS_LOAD, 
                data: []
            });
        }


    }
}

export function commentsLoad(idArr) {
    return async dispatch => {

        const data = [];

        for (let i = 0; i < idArr.length; i++) {
            data.push(
                fetch(`https://hacker-news.firebaseio.com/v0/item/${idArr[i]}.json?print=pretty`)
                    .then(response => response.json()));
        }

        Promise.all(data).then( values => {

            dispatch({
                type: COMMENTS_LOAD, 
                data: values
            })
        })

    }
}


export function updateNumbersOfComments(id) {
    return async dispatch => {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                            .then(response => response.json());
        dispatch({
            type: UPDATE_NUMBERS_OF_COMMENTS, 
            descendants: response.descendants
        })
    }
}
