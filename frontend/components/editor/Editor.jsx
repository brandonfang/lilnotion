import React, { useState, useEffect } from 'react';
import SidebarContainer from '../sidebar/SidebarContainer';
import FrameContainer from './FrameContainer';

const Editor = () => {

  return (
    <div className="editor">
      <SidebarContainer />
      <FrameContainer />
    </div>
  );
}

export default Editor;
