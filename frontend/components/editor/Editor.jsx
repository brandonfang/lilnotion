import React, { useState, useEffect } from 'react';
import SidebarContainer from '../sidebar/SidebarContainer';
import FrameContainer from './FrameContainer';
import OverlayContainer from './OverlayContainer';

const Editor = () => {

  return (
    // wrap the editor in <DragDropContext>
    <div className="editor">
      <SidebarContainer />
      <FrameContainer />
      {/* OverlayContainer */}
    </div>
  );
}

export default Editor;
