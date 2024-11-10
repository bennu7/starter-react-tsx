import { combineReducers } from 'redux';

import registerReducer from './register/registerSlice';

const rootReducer = combineReducers({
    register: registerReducer,
});

export default rootReducer;
