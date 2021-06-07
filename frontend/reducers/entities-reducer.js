import { combineReducers } from 'redux';
import usersReducer from './users-reducer';
import workspacesReducer from './workspaces-reducer';

export default combineReducers({
  users: usersReducer,
  workspaces: workspacesReducer
});
