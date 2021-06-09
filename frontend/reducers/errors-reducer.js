import { combineReducers } from 'redux';
import sessionErrorsReducer from './session-errors-reducer';
import workspaceErrorsReducer from './workspace-errors-reducer';
import blockErrorsReducer from './block-errors-reducer';
import pageErrorsReducer from './page-errors-reducer';


export default combineReducers({
  session: sessionErrorsReducer,
  workspaces: workspaceErrorsReducer,
  blocks: blockErrorsReducer,
  pages: pageErrorsReducer
});
