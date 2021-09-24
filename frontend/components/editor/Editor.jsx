import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SidebarContainer from '../sidebar/SidebarContainer';
import PageContainer from '../page/PageContainer';
// import ModalWrapper from '../modal/ModalWrapper';

class Editor extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  
  componentDidMount() {
    this.props.fetchPages(this.props.currentUser.id)
      .then(() => {
        const page = Object.values(this.props.pages)[0];
        this.props.history.push(`/p/${page.id}`);
      });
  }

  render() {
    return (
      <div className="editor">
        <Switch>
          <Route path="/p/:pageId" component={SidebarContainer} />
          <Route component={SidebarContainer} />
        </Switch>

        <Switch>
          <Route path="/p/:pageId" component={PageContainer} />
          <Route component={PageContainer} />
        </Switch>

        {/* <ModalWrapper /> */}
      </div>
    );
  }
}

export default Editor;
