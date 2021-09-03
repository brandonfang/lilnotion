import { RECEIVE_PAGE_ERRORS } from '../actions/page-actions';

const pageErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PAGE_ERRORS:
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

export default pageErrorsReducer;
