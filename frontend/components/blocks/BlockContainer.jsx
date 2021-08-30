import { connect } from 'react-redux';
import Block from './Block';
import {
  fetchBlock,
  fetchBlocks,
  createBlock,
  updateBlock,
  deleteBlock,
} from '../../actions/block-actions';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBlock: (blockId) => dispatch(fetchBlock(blockId)),
  fetchBlocks: (userId) => dispatch(fetchBlocks(userId)),
  createBlock: (block) => dispatch(createBlock(block)),
  updateBlock: (block) => dispatch(updateBlock(block)),
  deleteBlock: (blockId) => dispatch(deleteBlock(blockId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Block);
