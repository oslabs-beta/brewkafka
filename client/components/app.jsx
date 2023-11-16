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
          <NavLink className='sbButton' 
          to='/brokers'
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              fontSize: isActive ? "1.1em" : "1em",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          >
            Brokers
          </NavLink>
          <NavLink className='sbButton' 
          to='/topics'
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              fontSize: isActive ? "1.1em" : "1em",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          >
            Topics/Messages
          </NavLink>
          <NavLink className='sbButton' 
          to='/pcs'
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              fontSize: isActive ? "1.1em" : "1em",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          >
            Producers/Consumers
          </NavLink>
          <NavLink className='sbButton' 
          to='alerts'
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              fontSize: isActive ? "1.1em" : "1em",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          >
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
    </div>
  );
}

export default App;