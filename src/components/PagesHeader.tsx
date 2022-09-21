import React from 'react'
import "./PagesHeader.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReplayIcon from '@mui/icons-material/Replay';
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns"
import { useContextState } from '../context/contextProvider';
import { checkInputItems } from '../data/data';
import { IconButton } from '@mui/material';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const PagesHeader = () => {
  const {checkbox, setCheckbox} = useContextState()

  return (
    <div className='page-header'>
        <TooltipComponent content="select" position='BottomCenter'>
        <div className='check-input'>
          <div>
            <input type="checkbox"/>
            <span onClick={() => setCheckbox(prev => !prev)}>
            <ArrowDropDownIcon />
            </span>
          </div>

          {checkbox && <ul className='check-items'>
            {checkInputItems.map((item, index) => (
                <li className='check-item' key={index} onClick={() => setCheckbox(prev => !prev)}>{item}</li>
            ))}
          </ul>}
         </div>
        </TooltipComponent>
       <IconButton>
         <ReplayIcon /> 
       </IconButton>
       <IconButton>
       <MoreVertIcon />
       </IconButton>

    </div>
  )
}

export default PagesHeader