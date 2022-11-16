import { combineReducers } from "redux";
import { newsReducer } from "./newsReducer";
import { storyReducer } from "./storyReducer"
import { commentsReducer } from "./commentsReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
    newsReducer, 
    storyReducer, 
    commentsReducer, 
    appReducer
});