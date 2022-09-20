import React from 'react'
import "./PagesHeader.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReplayIcon from '@mui/icons-material/Replay';

const PagesHeader = () => {
  return (
    <div className='page-header'>
       <div className='select'>
         <input type="checkbox"/>
         <ArrowDropDownIcon />
       </div>
       <ReplayIcon />
       <MoreVertIcon />

    </div>
  )
}

export default PagesHeader