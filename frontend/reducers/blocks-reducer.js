import { RECEIVE_BLOCKS, RECEIVE_BLOCK } from '../actions/block-actions';

const blocksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BLOCKS:
      return Object.assign({}, action.blocks);
    case RECEIVE_BLOCK:
      return Object.assign({}, state, { [action.block.id]: action.block });
    default:
      return state;
  }
};

export default blocksReducer;
