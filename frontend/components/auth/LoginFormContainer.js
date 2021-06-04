import { connect } from 'react-redux';
import { login } from '../../actions/session-actions';
import LoginForm from './LoginForm';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: 'login',
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
