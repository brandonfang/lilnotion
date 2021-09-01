import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import SidebarContainer from '../sidebar/SidebarContainer';
import OverlayWrapper from './OverlayWrapper';
import PageContainer from '../page/PageContainer';
import Page from '../page/Page';

const Editor = () => {
  

  return (
    // wrap the editor in <DragDropContext>
    <div className="editor">
      <Switch>
        <Route path="/pages/:pageId" component={SidebarContainer} />
        <Route component={SidebarContainer} />
      </Switch>

      <Switch>
        <Route path="/pages/:pageId" component={PageContainer} />
        <Route component={PageContainer} />
      </Switch>

      {/* <OverlayWrapper /> */}
    </div>
  );
}

export default Editor;
