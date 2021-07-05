import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import { logout } from '../../actions/session-actions';
import { createPage, fetchPage, fetchPages, updatePage, deletePage } from '../../actions/page-actions';


const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  // createPage: (page) => dispatch(createPage(page)),
  createPage: (page) => dispatch(alert('Creating a new page')),
  fetchPage: (pageId) => dispatch(fetchPage(pageId)),
  fetchPages: (workspaceId) => dispatch(fetchPages(workspaceId)),
  updatePage: (page) => dispatch(updatePage(page)),
  deletePage: (pageId) => dispatch(deletePage(pageId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
