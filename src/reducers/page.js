const initialState = {
    year: 2021,
    photos: [],
}


export function pageReducer(state = initialState, action){
    switch (action.type){
        case "SET_YEAR":
            return {...state, year: action.payload}

        default:
            return state
    }
}