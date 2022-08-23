import { FETCH_URL } from '../actions/types'

const initalState = {
    allListing: [],
}

function getAPIReducer(state = initalState, action) {
    switch (action.type) {
        case FETCH_URL: {
            return {
                ...state,
                allListing: action.payload
            }
        }
        default:
            return state;

    }
}
export default getAPIReducer;