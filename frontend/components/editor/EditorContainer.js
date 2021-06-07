import { connect } from 'react-redux';
import Editor from './Editor';
import { logout } from '../../actions/session-actions';
// import actions from actions/page-actions
// import actions from actions/element-actions

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);