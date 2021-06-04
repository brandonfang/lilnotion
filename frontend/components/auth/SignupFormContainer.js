import { connect } from 'react-redux';
import { signup, login, receiveErrors } from '../../actions/session-actions';
import SignupForm from './SignupForm';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => {
  return {
  formAction: (user) => dispatch(signup(user)),
  demoLogin: (user) => dispatch(login(user)),
  // receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
