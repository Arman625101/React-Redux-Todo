const initialState = 'ALL';
import { FILTER } from '../constants';

export default (state = initialState, action) => {
    switch (action.type) {
        case FILTER: console.log(action.payload)
            return action.payload
        default:
            return state
    }
}