import { connect } from 'react-redux';
import Frame from './Frame';
import { logout } from '../../actions/session-actions';
import {
  createPage,
  fetchPage,
  fetchPages,
  updatePage,
  deletePage,
} from '../../actions/page-actions';
import {
  createBlock,
  fetchBlock,
  fetchBlocks,
  updateBlock,
  deleteBlock,
} from '../../actions/block-actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  createPage: (page) => dispatch(createPage(page)),
  fetchPage: (pageId) => dispatch(fetchPage(pageId)),
  fetchPages: (userId) => dispatch(fetchPages(userId)),
  updatePage: (page) => dispatch(updatePage(page)),
  deletePage: (pageId) => dispatch(deletePage(pageId)),
  createBlock: (block) => dispatch(createBlock(block)),
  fetchBlock: (blockId) => dispatch(fetchBlock(blockId)),
  fetchBlocks: (pageId) => dispatch(fetchBlocks(pageId)),
  updateBlock: (block) => dispatch(updateBlock(block)),
  deleteBlock: (blockId) => dispatch(deleteBlock(blockId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Frame);
