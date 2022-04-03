import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Sidebar from './Sidebar'
import {
  createPage,
  fetchPage,
  fetchPages,
  updatePage,
  deletePage,
} from '../../actions/page-actions'
import { createBlock } from '../../actions/block-actions'
import { logout } from '../../actions/session-actions'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  currentUser: state.entities.users[state.session.currentUserId],
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  createPage: (page) => dispatch(createPage(page)),
  fetchPage: (pageId) => dispatch(fetchPage(pageId)),
  fetchPages: (userId) => dispatch(fetchPages(userId)),
  updatePage: (page) => dispatch(updatePage(page)),
  deletePage: (pageId) => dispatch(deletePage(pageId)),
  createBlock: (block) => dispatch(createBlock(block)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar))
