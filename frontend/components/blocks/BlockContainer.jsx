import { connect } from 'react-redux';
import Block from './Block';
import {
  fetchBlock,
  fetchBlocks,
  createBlock,
  updateBlock,
  deleteBlock,
} from '../../actions/block-actions';
import {
  fetchPage,
  createPage,
  updatePage,
  deletePage,
} from '../../actions/page-actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.currentUserId],
  block: ownProps.block,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBlock: (blockId) => dispatch(fetchBlock(blockId)),
  fetchBlocks: (userId) => dispatch(fetchBlocks(userId)),
  createBlock: (block) => dispatch(createBlock(block)),
  updateBlock: (block) => dispatch(updateBlock(block)),
  deleteBlock: (blockId) => dispatch(deleteBlock(blockId)),
  updatePage: (page) => dispatch(updatePage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Block);
