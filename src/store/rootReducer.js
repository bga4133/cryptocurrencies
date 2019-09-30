import { combineReducers } from 'redux';

import { apiReducer as crypto } from './reducers';

const entities = combineReducers({
    crypto
});

export default entities;