import { RECEIVE_BLOCKS, RECEIVE_BLOCK, REMOVE_BLOCK } from '../actions/block-actions';

const blocksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BLOCKS:
      return Object.assign({}, state, action.blocks);
    case RECEIVE_BLOCK:
      return Object.assign({}, state, { [action.block.id]: action.block });
    case REMOVE_BLOCK:
      let newState = Object.assign({}, state);
      delete newState[action.blockId];
      return newState;
    default:
      return state;
  }
};

export default blocksReducer;
