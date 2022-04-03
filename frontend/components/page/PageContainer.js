import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchPage, createPage, updatePage, deletePage } from '../../actions/page-actions'
import {
  createBlock,
  fetchBlock,
  fetchBlocks,
  updateBlock,
  deleteBlock,
} from '../../actions/block-actions'
import Page from './Page'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  currentUser: state.entities.users[state.session.currentUserId],
  pages: ownProps.pages,
  blocks: ownProps.blocks,
  // pages: state.entities.pages,
  // blocks: state.entities.blocks,
  // page: state.entities.pages[ownProps.location.pathname.slice(3)],
  // pageId: ownProps.location.pathname.slice(3),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPage: (pageId) => dispatch(fetchPage(pageId)),
  createPage: (page) => dispatch(createPage(page)),
  updatePage: (page) => dispatch(updatePage(page)),
  deletePage: (pageId) => dispatch(deletePage(pageId)),
  createBlock: (block) => dispatch(createBlock(block)),
  fetchBlock: (blockId) => dispatch(fetchBlock(blockId)),
  fetchBlocks: (userId) => dispatch(fetchBlocks(userId)),
  updateBlock: (block) => dispatch(updateBlock(block)),
  deleteBlock: (blockId) => dispatch(deleteBlock(blockId)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page))
