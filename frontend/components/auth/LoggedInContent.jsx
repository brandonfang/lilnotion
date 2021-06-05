import React from 'react';
import NavBarContainer from '../navbar/NavBarContainer';
import { connect } from 'react-redux';

const LoggedInContent = (props) => {
  return (
    <>
      <NavBarContainer />
      <div className="user-content-wrapper">
        <h1>You are logged in.</h1>
        <p>This is content only authenticated users are supposed to see.</p>
        <p>currentUserId: {window.getState().session.id}</p>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  currentUser: users[session.id]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInContent);

