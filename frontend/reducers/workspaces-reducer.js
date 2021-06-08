import { RECEIVE_WORKSPACE } from '../actions/workspace-actions';

const workspacesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WORKSPACE:
      console.log(action);
      return { [action.workspace.id]: action.workspace };
    default:
      return state;
  }
};

export default workspacesReducer;
