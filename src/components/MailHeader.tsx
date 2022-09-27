import { IconButton } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArchiveIcon from '@mui/icons-material/Archive';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import LabelIcon from '@mui/icons-material/Label';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./MailHeader.css"


const MailHeader = () => {
  return (
    <div className='mail-header'>
        <span><ArrowBackIcon /> </span>

        <div className='header-center-icons'>
        <div className='center-icons'>
        <span>
            <ArchiveIcon />
        </span>
        <span>
            <ReportGmailerrorredIcon />
        </span>
        <span>
            <DeleteOutlineIcon />
        </span>
        </div>
        <div className='center-icons'>
        <span>
            <MailOutlineIcon />
        </span>
        <span>
            <AccessAlarmsIcon />
        </span>
        <span>
            <AddTaskIcon />
        </span>
        </div>
        <div className='last-center-icons'>
        <span>
            <DriveFileMoveIcon />
        </span>
        <span>
            <LabelIcon />
        </span>
        <span>
            <MoreVertIcon />
        </span>
        </div>
        </div>
        
        <div className='right-icon'>
        <span>
            <ArrowBackIosIcon />
        </span>
        <span>
            <ArrowForwardIosIcon />
        </span>
        </div>
    </div>
  )
}

export default MailHeader