import {
  RECEIVE_WORKSPACE,
  RECEIVE_WORKSPACE_ERRORS,
  REMOVE_ERRORS,
} from '../actions/workspace-actions';

const workspaceErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WORKSPACE:
      return [];
    case RECEIVE_WORKSPACE_ERRORS:
      console.log(action)
      return action.errors;
    case REMOVE_ERRORS:
      return [];
    default:
      return state;
  }
};

export default workspaceErrorsReducer;
