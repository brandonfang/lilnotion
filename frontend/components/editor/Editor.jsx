import React from 'react';
import SidebarContainer from '../sidebar/SidebarContainer';
import PageContainer from '../page/PageContainer';
import Loader from './Loader';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarClosed: false,
    };
  }

  componentDidMount() {
    this.props.fetchPages(this.props.currentUser.id);
    this.props.fetchBlocks(this.props.currentUser.id);
  }

  toggleSidebar() {
    this.setState({ sidebarClosed: !this.state.sidebarClosed });
  }

  render() {
    const { pages, blocks } = this.props;
    if (pages && blocks && Object.keys(pages).length > 0 && Object.keys(blocks).length > 0) {
      return (
        <div id="editor">
          <SidebarContainer
            pages={pages}
            sidebarClosed={this.state.sidebarClosed}
            toggleSidebar={this.toggleSidebar}
          />
          <PageContainer
            pages={pages}
            blocks={blocks}
            sidebarClosed={this.state.sidebarClosed}
            toggleSidebar={this.toggleSidebar}
          />
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

export default Editor;
