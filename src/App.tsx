import React, { useState } from 'react';
import { BrowserRouter, Routes,  Route } from "react-router-dom"
import './App.css';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import { useContextState } from './context/contextProvider';
import Inbox from './pages/Inbox';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton } from '@mui/material';

function App() {
  const {sidebar, setSidebar, leftSidebar, setLeftSidebar, activeMenu} = useContextState()

  return (
    <div className="app">
      <Header />

      <div className='control-right-sidebar'>
        {leftSidebar? (
          <div className='right-sidebar-icon'>
            <IconButton onClick={() => setLeftSidebar(prev => 
          !prev)}>
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        ) : (
          <IconButton onClick={() => setLeftSidebar(prev => 
          !prev)}>
            <ArrowBackIosIcon />
          </IconButton>
        )}
      </div>
      
      
      <BrowserRouter>
        <div className='app-body'>
          <div className='left-app-body'>
          {sidebar? (
            <div className='left-app-sidebar'>
                <LeftSidebar />
            </div>
            ) : (<div className='noleft-app-body'/>) 
          }
          </div>
          <div className={leftSidebar && activeMenu?"center-app-body" : "no-activemenu" && leftSidebar && !activeMenu?"center-app-body-nomenu" : "no-activemenu" && (activeMenu && !leftSidebar? "center-app-noleftsidebar" : "center-app-body-nomenu")&& (!activeMenu && !leftSidebar? "no-no": "center-app-noleftsidebar")}>
            <div>
              <Routes>
                <Route path='/' element={<Inbox />}  />
                {/* <Route path='/' element={}/>
                <Route path='/' element={}/> */}
              </Routes> 
          </div>
          </div>
          {leftSidebar &&
          <div className='right-app-body'>
          <RightSidebar />
          </div>}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
