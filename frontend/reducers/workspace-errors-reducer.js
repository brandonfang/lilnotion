import { RECEIVE_WORKSPACE_ERRORS } from '../actions/workspace-actions';

const workspaceErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WORKSPACE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default workspaceErrorsReducer;
