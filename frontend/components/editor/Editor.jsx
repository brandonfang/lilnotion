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
      // .then(() => {
      //   const page = Object.values(this.props.pages)[0];
      //   this.props.history.push(`/p/${page.id}`);
      // });
  }

  render() {
    return (
      <div className="editor">
        {/* <Switch>
          <Route path="/p/:pageId" component={SidebarContainer} />
        </Switch> */}
          <Route component={SidebarContainer} />

        {/* <Switch>
          <Route path="/p/:pageId" component={PageContainer} />
        </Switch> */}
          <Route component={PageContainer} />

        {/* <ModalWrapper /> */}
      </div>
    );
  }
}

export default Editor;
