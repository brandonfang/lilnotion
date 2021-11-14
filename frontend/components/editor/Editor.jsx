import React from 'react';
import SidebarContainer from '../sidebar/SidebarContainer';
import PageContainer from '../page/PageContainer';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageId: this.props.location.pathname.slice(3)
    }
  }
  
  componentDidMount() {
    this.props.fetchPages(this.props.currentUser.id)
      .then((res) => {
        if (!res.pages[this.state.pageId]) {
          const page = Object.values(res.pages)[0];
          this.props.history.push(`/p/${page.id}`);
        }
      });
  }

  render() {
    return (
      <div className="editor">
        <SidebarContainer />
        <PageContainer />
      </div>
    );
  }
}

export default Editor;
