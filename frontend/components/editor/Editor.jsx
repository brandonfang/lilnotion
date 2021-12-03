import React from 'react';
import SidebarContainer from '../sidebar/SidebarContainer';
import PageContainer from '../page/PageContainer';
import Loader from './Loader';

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPages(this.props.currentUser.id);
    this.props.fetchBlocks(this.props.currentUser.id);
  }

  render() {
    const { pages, blocks } = this.props;
    
    if (pages && blocks && Object.keys(pages).length > 0 && Object.keys(blocks).length > 0) {
      return (
        <div id="editor">
          <SidebarContainer pages={pages} />
          <PageContainer pages={pages} blocks={blocks} />
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

export default Editor;
