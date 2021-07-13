import React, { useState, useEffect } from 'react';
import SidebarContainer from '../sidebar/SidebarContainer';
import FrameContainer from './FrameContainer';
import OverlayContainer from './OverlayContainer';

const Editor = () => {
  
  // after mount, check if URL is valid
  
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
