import { connect } from 'react-redux';
import Page from './Page';
import {
  fetchPage,
  fetchPages,
  createPage,
  updatePage,
  deletePage,
} from '../../actions/page-actions';

const mapStateToProps = (state, ownProps) => ({
  
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPage: (pageId) => dispatch(fetchPage(pageId)),
  fetchPages: (userId) => dispatch(fetchPages(userId)),
  createPage: (page) => dispatch(createPage(page)),
  updatePage: (page) => dispatch(updatePage(page)),
  deletePage: (pageId) => dispatch(deletePage(pageId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
