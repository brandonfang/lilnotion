import { combineReducers } from 'redux';
import usersReducer from './users-reducer';
import blocksReducer from './blocks-reducer';
import pagesReducer from './pages-reducer';

export default combineReducers({
  users: usersReducer,
  blocks: blocksReducer,
  pages: pagesReducer
});
