import React, { useState, useEffect } from 'react';
import { Router } from 'react-router-dom';
import Page from './Page';

const Frame = () => {

  return (
    <div className="frame">
      {/* <TopbarContainer /> */}
      <div className="topbar-wrapper">
        <div className="topbar">
          <div className="topbar-breadcrumb-wrapper">
            <div className="topbar-breadcrumb">
            </div>
          </div>
        </div>
      </div>

      <Page />
    </div>
  );
}
 
export default Frame;
