import React from 'react';
import { connect } from 'react-redux'

const Onboarding = (props) => {


  return (
    <>
    </>
  );
};
 
const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    loginDemo: (user) => dispatch(login(user)),
    // receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);



