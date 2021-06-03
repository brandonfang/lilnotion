import { connect } from 'react-redux';
import { logout } from '../../actions/session-actions';
import Header from './Header';

const mapStateToProps = (state) => ({
  user: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
