import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PageHeader from './PageHeader';
import {
  fetchPage,
  updatePage,
  deletePage
} from '../../actions/page-actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPage: (pageId) => dispatch(fetchPage(pageId)),
  updatePage: (page) => dispatch(updatePage(page)),
  deletePage: (pageId) => dispatch(deletePage(pageId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageHeader));
