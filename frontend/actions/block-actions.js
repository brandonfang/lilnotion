import * as APIUtil from '../util/blocks-api-util';

export const RECEIVE_BLOCKS = 'RECEIVE_BLOCKS';
export const RECEIVE_BLOCK = 'RECEIVE_BLOCK';
export const REMOVE_BLOCK = 'REMOVE_BLOCK';
export const RECEIVE_BLOCK_ERRORS = 'RECEIVE_BLOCK_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const receiveBlocks = (blocks) => ({
  type: RECEIVE_BLOCKS,
  blocks
});

export const receiveBlock = (block) => ({
  type: RECEIVE_BLOCK,
  block
});

export const removeBlock = (blockId) => ({
  type: REMOVE_BLOCK,
  blockId
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_BLOCK_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS
});

export const fetchBlocks = (userId) => (dispatch) => (
  APIUtil.fetchBlocks(userId).then(
    (blocks) => dispatch(receiveBlocks(blocks)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const createBlock = (block) => (dispatch) => (
  APIUtil.createBlock(block).then(
    (block) => dispatch(receiveBlock(block)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const fetchBlock = (blockId) => (dispatch) => (
  APIUtil.fetchBlock(blockId).then(
    (block) => dispatch(receiveBlock(block)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const updateBlock = (block) => (dispatch) => (
  APIUtil.updateBlock(block).then(
    (block) => dispatch(receiveBlock(block)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const deleteBlock = (blockId) => (dispatch) => (
  APIUtil.deleteBlock(blockId).then(
    () => dispatch(removeBlock(blockId)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  )
);
