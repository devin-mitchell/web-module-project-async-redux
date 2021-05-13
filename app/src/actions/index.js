import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchSongInfo = () => {
    return(dispatch => {
        dispatch(fetchStart());

        axios.get('https://itunes.apple.com/search?term=IVOURIES')
        .then(res => {
            dispatch({type: FETCH_SUCCESS, payload: res.data.results})
        })
        .catch(err => {
            console.log("ERROR", err)
            dispatch({type: FETCH_FAIL, payload: err})
        })
    })
}

export const fetchStart = () => {
    return({type: FETCH_START})
} 
export const fetchSuccess = (songInfo) => {
    return({type: FETCH_SUCCESS, payload: songInfo})
} 
export const fetchFail = (err) => {
    return({type: FETCH_FAIL, payload: err})
} 
