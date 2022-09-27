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
import EditIcon from '@mui/icons-material/Edit';
import MailIcon from '@mui/icons-material/Mail';
import VideoCallIcon from '@mui/icons-material/VideoCall';

function App() {
  const {sidebar, setSidebar, rightSidebar, setRightSidebar, activeMenu, setCompose} = useContextState()

  return (
    <div className="app">
      <Header />

      <div className='control-right-sidebar'>
        {rightSidebar? (
          <div className='right-sidebar-icon'>
            <IconButton onClick={() => setRightSidebar(prev => 
          !prev)}>
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        ) : (
          <IconButton onClick={() => setRightSidebar(prev => 
          !prev)}>
            <ArrowBackIosIcon />
          </IconButton>
        )}
      </div>
      
      <div className='mobile-compose' onClick={() => setCompose(true)}>
            <EditIcon />
            {activeMenu && <p className=''>compose</p>}
      </div>

      <div className='mobile-footer'>
           <div className='footer-items'>
           <div>
            <span>90+</span>
            <MailIcon />
            <p>Mail</p>
           </div>
           <div>
            <VideoCallIcon />
            <p>Meet</p>
           </div>
           </div>
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
          <div className={rightSidebar && activeMenu?"center-app-body" : "no-activemenu" && rightSidebar && !activeMenu?"center-app-body-nomenu" : "no-activemenu" && (activeMenu && !rightSidebar? "center-app-noleftsidebar" : "center-app-body-nomenu")&& (!activeMenu && !rightSidebar? "no-no": "center-app-noleftsidebar")}>
            <div>
              <Routes>
                <Route path='/' element={<Inbox />}  />
                {/* <Route path='/' element={}/>
                <Route path='/' element={}/> */}
              </Routes> 
          </div>
          </div>
          {rightSidebar &&
          <div className='right-app-body'>
          <RightSidebar />
          </div>}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
