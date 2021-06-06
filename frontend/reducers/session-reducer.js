import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session-actions';

const _nullUser = Object.freeze({
  currentUserId: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUserId: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
