import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Brokers } from './pages/Brokers';
import { Topics } from './pages/Topics';
import { ProducersAndConsumers } from './pages/ProducersAndConsumers';
import { Alerts } from './pages/Alerts';
import Loginpage from './pages/Loginpage';
import Dashboards from './Dashboards';
import beanCarry from '../assets/beancarry.png';

const App = () => {
  return (
    <div id='contentDisplay'>
        <Routes>
          <Route path='/' element={<Loginpage />} />
          <Route path='/dashboards' element={<Dashboards />} />
          <Route path='/brokers' element={<Brokers />} />
          <Route path='/topics' element={<Topics />} />
          <Route path='/pcs' element={<ProducersAndConsumers />} />
          <Route path='/alerts' element={<Alerts />} />
        </Routes>
      </div> 
  );
};

export default App;
