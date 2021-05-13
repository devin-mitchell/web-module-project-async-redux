import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from '../actions';

const initialState = {
    songInfo: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return ({
                ...state,
                isFetching: true,
                error:''
            })
        case FETCH_SUCCESS:
            console.log("PLS PLS LOG", action.payload)
            const randomSong = (action.payload[Math.floor(Math.random() * 14)])
            return ({
                ...state,
                songInfo: randomSong,
                isFetching: false,
                error: ''
            })
        case FETCH_FAIL:
            return ({
                ...state,
                isFetching: false,
                error: action.payload
            })
        default:
            return({
                ...state
            })
    }
}