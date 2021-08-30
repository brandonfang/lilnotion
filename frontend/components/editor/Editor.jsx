import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import SidebarContainer from '../sidebar/SidebarContainer';
import FrameContainer from './FrameContainer';
import OverlayWrapper from './OverlayWrapper';

const Editor = () => {
  

  return (
    // wrap the editor in <DragDropContext>
    <div className="editor">
      <Switch>
        <Route path="/pages/:pageId" component={SidebarContainer} />
        <Route component={SidebarContainer} />
      </Switch>

      <Switch>
        <Route path="/pages/:pageId" component={FrameContainer} />
        <Route component={FrameContainer} />
      </Switch>

      {/* <OverlayWrapper /> */}
    </div>
  );
}

export default Editor;
