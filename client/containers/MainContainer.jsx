import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SidebarContainer from './SidebarContainer'

const MainContainer = () => {
  return (
    <div className='container'>
      <div className='container' id='sidebar'>
        <SidebarContainer />
      </div>
      <div className='container' id='contentDisplay'>
        <h1>check out our box</h1>
        <p>gonna use this paragraph el to check styling</p>
      </div>
    </div>
  );
};

export default MainContainer;