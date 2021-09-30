import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './Page';
import {
  fetchPage,
  fetchPages,
  createPage,
  updatePage,
  deletePage,
} from '../../actions/page-actions';
import {
  createBlock,
  fetchBlock,
  fetchBlocks,
  updateBlock,
  updateBlocks,
  deleteBlock,
} from '../../actions/block-actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  currentUser: state.entities.users[state.session.currentUserId],
  pages: state.entities.pages,
  blocks: state.entities.blocks,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPage: (pageId) => dispatch(fetchPage(pageId)),
  fetchPages: (userId) => dispatch(fetchPages(userId)),
  createPage: (page) => dispatch(createPage(page)),
  updatePage: (page) => dispatch(updatePage(page)),
  deletePage: (pageId) => dispatch(deletePage(pageId)),
  createBlock: (block) => dispatch(createBlock(block)),
  fetchBlock: (blockId) => dispatch(fetchBlock(blockId)),
  fetchBlocks: (pageId) => dispatch(fetchBlocks(pageId)),
  updateBlock: (block) => dispatch(updateBlock(block)),
  updateBlocks: (pageId, blocks) => dispatch(updateBlocks(pageId, blocks)),
  deleteBlock: (blockId) => dispatch(deleteBlock(blockId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page));

