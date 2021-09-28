import { RECEIVE_BLOCKS, RECEIVE_BLOCK } from '../actions/block-actions';

const blocksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BLOCKS:
      return Object.assign({}, state, action.blocks);
    case RECEIVE_BLOCK:
      // update one page's blocks
      console.log(action)
      return Object.assign({}, state, { [action.block.pageId]: action.block });
    default:
      return state;
  }
};

export default blocksReducer;
