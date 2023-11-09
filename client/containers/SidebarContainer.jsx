import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const SidebarContainer = () => {
  return (
      <div className="sidebar">
          <button className='sbButton'>Brokers</button>
          <button className='sbButton'>Topics/Partitions</button>
          <button className='sbButton'>Producers/Consumers</button>
          <button className='sbButton'>Alerts</button>
      </div>
  )
};

export default SidebarContainer;