import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session-actions';
import {  } from '../../actions/page-actions';
import {  } from '../../actions/block-actions';
import NavBarContainer from '../navbar/NavBarContainer';
import EditorContainer from '../editor/EditorContainer'

class Workspace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props);
  }

  componentDidMount() {
    // this.props.fetchPages()
  }
  
  render() {
    console.log(this.props.match);

    return (
      <div>
        <NavBarContainer />
        {/* <h2>This is your workspace</h2> */}
        {/* <h2>{this.props.workspace.name}</h2> */}
        {/* <p>lilnotion.herokuapp.com/{this.props.workspace.domain}</p> */}
        {/* <p>Created by user {this.props.creatorId}</p> */}
        <EditorContainer />
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Workspace);