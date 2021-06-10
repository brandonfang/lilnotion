import React from 'react';
import { Link } from 'react-router-dom';

class WorkspaceShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchPages()
  }
  
  render() {
    if (this.props.pin === undefined ) return null;
    return (
      <div>
        <h2>{this.props.workspace.name}</h2>
        <p>lilnotion.com/{this.props.workspace.domain}</p>
        <p>Created by user {this.props.creatorId}</p>
      </div>
    )
  }
};

export default WorkspaceShow;