import { RECEIVE_BLOCK_ERRORS } from '../actions/block-actions';

const blockErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BLOCK_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default blockErrorsReducer;
