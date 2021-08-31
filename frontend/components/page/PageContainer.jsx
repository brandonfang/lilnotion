import { connect } from 'react-redux';
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
  deleteBlock,
} from '../../actions/block-actions';

const mapStateToProps = (state, ownProps) => ({
  
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
  deleteBlock: (blockId) => dispatch(deleteBlock(blockId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);

