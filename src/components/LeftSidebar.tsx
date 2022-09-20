import React from 'react'
import { useContextState } from '../context/contextProvider'
import "./LeftSidebar.css"
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { leftSidebarFooter, leftSideBarLink, leftSideBarMobile } from '../data/data';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const LeftSidebar: React.FC = () => {
    const {sidebar, setSidebar, activeMenu, setActiveMenu, screenSize, setScreenSize, moreSidebarItems, setMoreSidebarItems} = useContextState()
    // const history = useHis
    // useHis

  return (
    <div className='sidebar'>
        {/* <Link to="/"> */}
        <div className='sidebar-logo'>
            <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" />
            <IconButton onClick={() => setSidebar(false)} className="close-sidebar">
                <CloseIcon />
            </IconButton>
        </div>
        {/* </Link> */}
        <div className='compose'>
            {/* <IconButton className='items'> */}
                <EditIcon />
            {/* </IconButton> */}
        {activeMenu && <p className=''>compose</p>}
        </div>
        <div className='sidebar-links'>
        {leftSideBarLink.map((item, index) => (
            <div className='sidebar-item' key={index}>
            <span className='items icons'>{item.icon}</span>
            <span className={`${activeMenu? "sidebar-item-p" : "sidebar-item-y"}`}>{item.name}</span>
            </div>
        ))}
        {moreSidebarItems? (
            <div>
                <div className='sidebar-item' onClick={() => setMoreSidebarItems(prev => 
                !prev)}>
            <span className='items icons'><KeyboardArrowUpIcon /></span>
            <p className={`${activeMenu? "sidebar-item-p" : "sidebar-item-y"}`}>Less</p>
            </div>
            {leftSideBarLink.map((item, index) => (
                <div className='sidebar-item' key={index}>
                <span className='items icons'>{item.icon}</span>
                <span className={`${activeMenu? "sidebar-item-p" : "sidebar-item-y"}`}>{item.name}</span>
                </div>
            ))}
            </div>
        ) : (
            <div className='sidebar-item' onClick={() => setMoreSidebarItems(prev => 
                !prev)}>
            <span className='items icons'><KeyboardArrowDownIcon /></span>
            <p className={`${activeMenu? "sidebar-item-p" : "sidebar-item-y"}`}>More</p>
            </div>
        )}
        </div>
        <div className='sidebar-mobile-links'>
        {leftSideBarMobile.map((item, index) => (
            <div className='sidebar-mobile-items' key={index} >
            <span >{item.title}</span>
            {item.links.map((link, index) => (
                <div className='sidebar-mobile-link' key={index}>
                    <span>{link.icon}</span>
                    <h4>{link.name}</h4>
                </div>
            ))}
            </div>
        ))}
        <div className='sidebar-mobile-footer'>
        {leftSidebarFooter.map((item, index) => (
            <div className='sidebar-mobile-link' key={index}>
            <span>{item.icon}</span>
            <h4>{item.name}</h4>
        </div>
        ))}
        </div>
        </div>
  </div>
  )
}

export default LeftSidebar