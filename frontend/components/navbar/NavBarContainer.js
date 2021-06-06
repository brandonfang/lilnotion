import { connect } from 'react-redux';
import { logout } from '../../actions/session-actions';
import Navbar from './NavBar';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
