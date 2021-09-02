import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import SidebarContainer from '../sidebar/SidebarContainer';
import PageContainer from '../page/PageContainer';
import ModalWrapper from '../modal/ModalWrapper';

const Editor = () => {
  
  return (
    // wrap the editor in <DragDropContext>
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

export default Editor;
