import { RECEIVE_BLOCK_ERRORS } from '../actions/block-actions';

const blockErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BLOCK_ERRORS:
      // temp fix
      if (action.errors) {
        return action.errors
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default blockErrorsReducer;
