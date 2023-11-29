import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Dashboards = () => {
    return (
    
        <div id="wrapper">
          <nav id="sidebar">
              <NavLink className='sbButton' 
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
          <br/>
        </div>
        
      );
}

export default Dashboards;