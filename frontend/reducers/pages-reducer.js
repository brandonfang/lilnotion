import { RECEIVE_PAGE } from '../actions/page-actions';

const pagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PAGE:
      return Object.assign({}, state, { [action.page.id]: action.page });
    default:
      return state;
  }
};

export default pagesReducer;
