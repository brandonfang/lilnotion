import React from 'react';
import NavBarContainer from '../navbar/NavBarContainer';
import { connect } from 'react-redux';

const LoggedInContent = (props) => {
  const state = window.getState();
  const currentUserId = state.session.currentUserId;
  const currentUser = state.entities.users[currentUserId];

  return (
    <>
      {/* <NavBarContainer state={state} /> */}
      <div className="user-content-wrapper">
        <h1>You are logged in.</h1>
        <p>This is content only authenticated users are supposed to see.</p>
        {/* <p>Your name: {currentUser.firstName} {currentUser.lastName}</p>
        <p>Your email: {currentUser.email}</p>
        <p>Your ID: {currentUser.id}</p> */}
        <h3 tabIndex="0" className="nav-logout" onClick={props.logout}><a href="/">Log out</a></h3>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  currentUser: state.entities.users[state.session.currentUserId]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInContent);

