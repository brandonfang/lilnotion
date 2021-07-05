import React from 'react';
import SidebarContainer from '../sidebar/SidebarContainer';
import FrameContainer from './FrameContainer';

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchPages(workspaceId);
    // load first page
  }

  render() {
    // console.log(this.props);
    return (
      <div className="editor">
        <SidebarContainer />
        <FrameContainer />
      </div>
    );
  }
}

export default Editor;
