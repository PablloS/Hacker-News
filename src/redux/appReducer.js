import { 
    LOADER_DISPLAY_OFF, 
    LOADER_DISPLAY_ON,  } from "./types";


const initialState = {
    loading: false
}

export const appReducer = (state = initialState, action) => {

    switch(action.type) {
        case LOADER_DISPLAY_ON:
            return {
                ...state, 
                loading: true
            }

        case LOADER_DISPLAY_OFF:
            return {
                ...state, 
                loading: false
            }

        default:
            return state;
    }
}