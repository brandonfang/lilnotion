import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PageHeader from './PageHeader';
import {
  fetchPage,
  updatePage,
} from '../../actions/page-actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  currentUser: state.entities.users[state.session.currentUserId],
  pages: state.entities.pages,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPage: (pageId) => dispatch(fetchPage(pageId)),
  updatePage: (page) => dispatch(updatePage(page)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageHeader));
