import { RECEIVE_PAGE, RECEIVE_PAGES, REMOVE_PAGE } from '../actions/page-actions';

const pagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PAGE:
      console.log(action)
      action.page.blockIds = action.page.blockIds.split(',');
      return Object.assign({}, state, { [action.page.id]: action.page });
    case RECEIVE_PAGES:
      console.log(action);
      for (const page in action.pages) {
        page.blockIds = page.blockIds.split(',');
      }
      return Object.assign({}, action.pages);
    case REMOVE_PAGE:
      let newState = Object.assign({}, state);
      delete newState[action.page.id];
      return newState;
    default:
      return state;
  }
};

export default pagesReducer;
