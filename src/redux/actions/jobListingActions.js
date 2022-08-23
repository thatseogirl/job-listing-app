import { FETCH_URL } from './types'

const API_URL = 'https://my-json-server.typicode.com/thatseogirl/job-listing-app/jobListing'

export const fetchListing = () => dispatch => {
    fetch(API_URL)
        .then(res => res.json())
        .then((listing) => dispatch({
            type: FETCH_URL,
            payload: listing,
        }))
}

export const selectURL = state => state.listing.allListing