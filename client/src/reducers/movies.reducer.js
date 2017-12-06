import _ from 'lodash';
import { GET_MOVIES } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_MOVIES:
            console.log(action.payload);
            return _.mapKeys(action.payload.data, '_id');
        default:
            return state;
    }
}
