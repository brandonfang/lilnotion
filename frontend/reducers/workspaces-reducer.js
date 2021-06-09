import { RECEIVE_WORKSPACE } from '../actions/workspace-actions';

const workspacesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WORKSPACE:
      return Object.assign({}, state, { [action.workspace.id]: action.workspace })
    default:
      return state;
  }
};

export default workspacesReducer;
