import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useContextState } from '../context/contextProvider';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SettingsIcon from "@mui/icons-material/Settings"
import AppsIcon from '@mui/icons-material/Apps';
import TuneIcon from '@mui/icons-material/Tune';
import { Avatar, IconButton } from '@mui/material';

const Header = () => {
    const {sidebar, setSidebar, screenSize, setScreenSize, activeMenu, setActiveMenu} = useContextState()

    useEffect(()=> {
        const handleSidebar = () => setScreenSize(window.innerWidth)
    
        window.addEventListener('resize', handleSidebar)
        handleSidebar()
    
        return () => window.removeEventListener('resize', handleSidebar)
      },[])
    
      useEffect(() => {
        if(screenSize !== undefined && screenSize <= 768){
          setSidebar(false)
          setActiveMenu(true)
        } else{
          setSidebar(true)
          setActiveMenu(true)
        }
      },[screenSize])

  return (
    <div className='header-app'>
        <nav className='header'>
        <div className='header-left'>
            <IconButton onClick={() => setActiveMenu(prev => !prev)}>
             <MenuIcon />
            </IconButton>
            <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" />
        </div>
        <div className='header-center'>
            <span className="search-icon-one">
                <IconButton  onClick={() => setSidebar(prev => !prev)} >
                <MenuIcon />
                </IconButton>
            </span>
            <SearchIcon className='searchIcon'/>
            <input placeholder='search mail' />
            <TuneIcon className='searchIcon'/>
        </div>
        <div className='header-right' >
            <IconButton>
            <ErrorOutlineIcon />
            </IconButton>
            <IconButton>
            <SettingsIcon />
            </IconButton>
            <IconButton>
            <AppsIcon />
            </IconButton>
        </div>
        <div className='avatar'>
            <Avatar  />
        </div>
    </nav>
    </div>
  )
}

export default Header