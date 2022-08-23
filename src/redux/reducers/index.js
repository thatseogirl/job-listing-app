import { combineReducers } from "redux";
import jobListingReducer from './jobListingReducer'


export default combineReducers({
    listing: jobListingReducer
});