import React, { useState, useEffect } from 'react';
import SidebarContainer from '../sidebar/SidebarContainer';
import FrameContainer from './FrameContainer';
import OverlayWrapper from './OverlayWrapper';

const Editor = () => {
  
  // after mount, check if URL is valid

  return (
    // wrap the editor in <DragDropContext>
    <div className="editor">
      <SidebarContainer />
      <FrameContainer />
      <OverlayWrapper />
    </div>
  );
}

export default Editor;
