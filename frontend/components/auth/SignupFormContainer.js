import { connect } from 'react-redux';
import { signup, login, receiveErrors, removeErrors } from '../../actions/session-actions';
import { createWorkspace } from '../../actions/workspace-actions';
import SignupForm from './SignupForm';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'signup'
});

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    createWorkspace: (workspace) => dispatch(createWorkspace(workspace)),
    loginDemo: (user) => dispatch(login(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
