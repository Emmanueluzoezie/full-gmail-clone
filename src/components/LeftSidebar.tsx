import React from 'react'
import { useContextState } from '../context/contextProvider'
import "./LeftSidebar.css"
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { leftSidebarFooter, leftSideBarLink, leftSideBarMobile, moreLeftSideBarLink } from '../data/data';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LabelIcon from '@mui/icons-material/Label';

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
            {moreLeftSideBarLink.map((item, index) => (
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
        <div className='sidebar-item' style={{ marginTop:"20px", marginBottom:"10px"}}>
            <span className={`${activeMenu? "sidebar-item-p" : "sidebar-item-y"}`}>Label</span>
            <span className='items icons'><LabelIcon /></span>
        </div>
        <div className='sidebar-item'>
            <span className='items icons'><LabelIcon /></span>
            <span className={`${activeMenu? "sidebar-item-p" : "sidebar-item-y"}`}>Notes</span>
        </div>
        </div>
        <div className='sidebar-mobile-links'>
        {leftSideBarMobile.map((item, index) => (
            <div className='sidebar-mobile-items' key={index} >
            <div className='sidebar-mobile-items-title'>{item.title}</div>
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