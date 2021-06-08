import { combineReducers } from 'redux';
import sessionErrorsReducer from './session-errors-reducer';
import workspaceErrorsReducer from './workspace-errors-reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  workspaces: workspaceErrorsReducer
});
