import React from 'react';
import SidebarContainer from '../sidebar/SidebarContainer';
import PageContainer from '../page/PageContainer';
import Loader from './Loader';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarClosed = false,
    }
  }

  componentDidMount() {
    this.props.fetchPages(this.props.currentUser.id);
    this.props.fetchBlocks(this.props.currentUser.id);
  }

  toggleSidebar() {
    this.setState({ sidebarClosed: !this.state.sidebarClosed });
  }

  // toggleSidebar() {
  //   const sidebar = this.ref.current;
  //   const editor = document.getElementById('editor');
  //   if (this.state.sidebarCollapsed) {
  //     sidebar.classList.remove('collapsed');
  //     editor.classList.remove('collapsed');
  //     this.setState({ sidebarCollapsed: false, toggleHover: false });
  //   } else {
  //     sidebar.classList.add('collapsed');
  //     editor.classList.add('collapsed');
  //     this.setState({ sidebarCollapsed: true, toggleHover: false });
  //   }
  // }

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
