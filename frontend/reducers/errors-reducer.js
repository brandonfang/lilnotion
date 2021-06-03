import { combineReducers } from 'redux';
import sessionErrorsReducer from './session-errors-reducer';

export default combineReducers({
  session: sessionErrorsReducer,
});
