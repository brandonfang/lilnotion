import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MediaMenu from './MediaMenu';
import {
  fetchPage,
  createPage,
  updatePage,
  deletePage,
} from '../../actions/page-actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  currentUser: state.entities.users[state.session.currentUserId],
  pages: state.entities.pages,
  pageId: ownProps.location.pathname.slice(3),
  page: state.entities.pages[ownProps.location.pathname.slice(3)],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPage: (pageId) => dispatch(fetchPage(pageId)),
  createPage: (page) => dispatch(createPage(page)),
  updatePage: (page) => dispatch(updatePage(page)),
  deletePage: (pageId) => dispatch(deletePage(pageId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MediaMenu));
