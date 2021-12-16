import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session-actions';
import LoginForm from './LoginForm';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  removeErrors: () => dispatch(removeErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
