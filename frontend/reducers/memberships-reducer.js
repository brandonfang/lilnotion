import { RECEIVE_MEMBERSHIP } from '../actions/membership-actions';

const membershipsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MEMBERSHIP:
      return Object.assign({}, state, { [action.membership.id]: action.membership });
    default:
      return state;
  }
};

export default membershipsReducer;
