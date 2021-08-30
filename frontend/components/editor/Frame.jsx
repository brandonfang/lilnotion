import React, { useState, useEffect } from 'react';
import { Router } from 'react-router-dom';
import PageContainer from '../page/PageContainer';
import Page from '../page/Page';

const Frame = () => {

  return (
    <div className="frame">
      {/* <TopbarContainer /> */}
      <div className="topbar-wrapper">
        <div className="topbar">
          <div className="breadcrumb-wrapper">
            <div className="breadcrumb">
            </div>
          </div>
          <div className="more-button-wrapper">
            <div className="more-button">
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <PageContainer />
    </div>
  );
}
 
export default Frame;
