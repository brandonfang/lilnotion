import { RECEIVE_MEMBERSHIP_ERRORS } from '../actions/membership-actions';

const membershipErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MEMBERSHIP_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default membershipErrorsReducer;
