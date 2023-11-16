import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Brokers } from './pages/Brokers';
import { Topics } from './pages/Topics';
import { ProducersAndConsumers } from './pages/ProducersAndConsumers';
import { Alerts } from './pages/Alerts';
// import { beanCarry } from '../assets/beancarry.png'

const App = () => {
  return (
    <div>
      <nav id='sidebar'>
        <NavLink
          className='sbButton'
          to='/brokers'
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? 'bold' : '',
              fontSize: isActive ? '1.1em' : '1em',
            };
          }}>
          Brokers
        </NavLink>
        <NavLink
          className='sbButton'
          to='/topics'
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? 'bold' : '',
              fontSize: isActive ? '1.1em' : '1em',
            };
          }}>
          Topics/Messages
        </NavLink>
        <NavLink
          className='sbButton'
          to='/pcs'
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? 'bold' : '',
              fontSize: isActive ? '1.1em' : '1em',
            };
          }}>
          Producers/Consumers
        </NavLink>
        <NavLink
          className='sbButton'
          to='alerts'
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? 'bold' : '',
              fontSize: isActive ? '1.1em' : '1em',
            };
          }}>
          Alerts
        </NavLink>
      </nav>
      <div id='contentDisplay'>
        <Routes>
          <Route path='brokers' element={<Brokers />} />
          <Route path='topics' element={<Topics />} />
          <Route path='pcs' element={<ProducersAndConsumers />} />
          <Route path='alerts' element={<Alerts />} />
        </Routes>
      </div>
      <br />
      {/* <img id="beancarry" src={beanCarry} alt="BrewKafs carrying message beans"/> */}
    </div>
  );
};

export default App;
