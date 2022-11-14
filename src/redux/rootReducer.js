import { combineReducers } from "redux";
import { newsReducer } from "./newsReducer";
import { storyReducer } from "./storyReducer"
import { commentsReducer } from "./commentsReducer";

export const rootReducer = combineReducers({
    newsReducer, 
    storyReducer, 
    commentsReducer
});