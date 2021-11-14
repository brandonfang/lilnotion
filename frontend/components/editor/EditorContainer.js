import { connect } from 'react-redux';
import Editor from './Editor';
import { logout } from '../../actions/session-actions';
import { fetchPages } from '../../actions/page-actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  currentUser: state.entities.users[state.session.currentUserId],
  pages: state.entities.pages,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPages: (userId) => dispatch(fetchPages(userId)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
