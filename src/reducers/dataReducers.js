import { GET_DATA } from '../actions/dataActions'
import initialState from './initialState';

export default (state = initialState.data, action) => {
    switch (action.type) {
        case GET_DATA:
            return Object.assign({}, state, {
                results: action.payload
            })
        default:
            return state
    }
}