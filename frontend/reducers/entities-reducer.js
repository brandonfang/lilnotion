import { combineReducers } from 'redux';
import usersReducer from './users-reducer';
import workspacesReducer from './workspaces-reducer';
import membershipsReducer from './memberships-reducer';
import blocksReducer from './blocks-reducer';
import pagesReducer from './pages-reducer';

export default combineReducers({
  users: usersReducer,
  workspaces: workspacesReducer,
  memberships: membershipsReducer,
  blocks: blocksReducer,
  pages: pagesReducer
});
