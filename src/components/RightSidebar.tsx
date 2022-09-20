import React from 'react'
import { rigtSideBarLink } from '../data/data'
import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import "./RightSidebar.css"
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';

const RightSidebar = () => {
  return (
    <div className='right-sidebar'>
        {rigtSideBarLink.map((item, index) => (
            <div className='right-sidebar-body' key={index}>
                <TooltipComponent position="BottomCenter" content="Tooltip Content" >
                <IconButton>{item.icon}</IconButton>
                </TooltipComponent>
             </div>
        ))}  

        <TooltipComponent content="Get Add on"  position='TopCenter'>
        <div className='right-sidebar-last-child'>
            <IconButton><AddIcon /></IconButton>
        </div>
        </TooltipComponent>
    </div>
  )
}

export default RightSidebar