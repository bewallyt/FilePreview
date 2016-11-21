import {combineReducers} from 'redux';
import addFileReducer from './addFileReducer';
import previewFileReducer from './previewFileReducer'


const rootReducer = combineReducers({
  addFileReducer,
  previewFileReducer
});

export default rootReducer;
