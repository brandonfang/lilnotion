import React from 'react';
import SidebarContainer from '../sidebar/SidebarContainer';
import PageContainer from '../page/PageContainer';

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchPages(this.props.currentUser.id)
      .then(() => {
        if (this.props.location.pathname === '/') {
          const page = Object.values(this.props.pages)[0];
          this.props.history.push(`/p/${page.id}`);
        }
      });
  }

  // check for invalid url and redirect

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
