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
  const {sidebar, setSidebar, leftSidebar, setLeftSidebar} = useContextState()

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
          {sidebar? (
            <div className=''>
                <LeftSidebar />
            </div>
            ) : ("") 
          }
          <div className='page-body'>
          <Routes>
            <Route path='/' element={<Inbox />}  />
            {/* <Route path='/' element={}/>
            <Route path='/' element={}/> */}
          </Routes>
          </div>
          {leftSidebar && <RightSidebar />}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
