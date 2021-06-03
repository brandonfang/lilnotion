import { combineReducers } from 'redux';
import entitiesReducer from './entities-reducer';
import sessionReducer from './session-reducer';
import errorsReducer from './errors-reducer';
import uiReducer from './ui-reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer,
});

export default rootReducer;
