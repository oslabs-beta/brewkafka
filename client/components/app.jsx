import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { Brokers } from './pages/Brokers';
import { Topics } from './pages/Topics';
import { ProducersAndConsumers } from './pages/ProducersAndConsumers';
import { Alerts } from './pages/Alerts';


const App = () => {
  return (
    <div className='container'>
      <nav id="sidebar">
          <NavLink className='sbButton' to='/brokers'>Brokers</NavLink>
          <NavLink className='sbButton' to='/topics'>Topics/Messages</NavLink>
          <NavLink className='sbButton' to='/pcs'>Producers/Consumers</NavLink>
          <NavLink className='sbButton' to='alerts'>Alerts</NavLink>
      </nav>
      <div id='contentDisplay'>
        <Routes>
          <Route path='brokers' element={<Brokers />} />
          <Route path='topics' element={<Topics />} />
          <Route path='pcs' element={<ProducersAndConsumers />} />
          <Route path='alerts' element={<Alerts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;