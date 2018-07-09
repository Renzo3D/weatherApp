import { combineReducers } from 'redux';
import searchReducer from './components/Search/searchReducer';

const rootReducer = combineReducers({
    search : searchReducer,
    // add reducers
});

export default rootReducer;
