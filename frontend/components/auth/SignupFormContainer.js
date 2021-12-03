import { connect } from 'react-redux';
import { signup, login, receiveErrors, removeErrors } from '../../actions/session-actions';
import { createPage } from '../../actions/page-actions';
import { createBlock } from '../../actions/block-actions';
import SignupForm from './SignupForm';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    loginDemo: (user) => dispatch(login(user)),
    createPage: (page) => dispatch(createPage(page)),
    createBlock: (block) => dispatch(createBlock(block)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    removeErrors: () => dispatch(removeErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
