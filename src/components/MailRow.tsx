import { Avatar } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DraftsIcon from '@mui/icons-material/Drafts';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import "./MailRow.css";
import {MailRowType } from "../pages/Inbox"
import React from 'react';


// type Props = {
//     item: MailRowType
// }

const MailRow = (props: MailRowType) => {

  return (
    <div className='mailrow'>
        <div className=''>
            <div className='left-mailrow'>
                    <Avatar src={props?.image} className='avatar'/>
                    <div>
                        <input type="checkbox"/>
                        {props.icon}
                    </div>
                </div>
                <div className='center-mailrow'>
                    <h2>{props.name}</h2>
                    <div className='center-mailrow-body'> 
                        <h4>{props.title}</h4>
                        <span>-</span>
                        <p>{props.description}</p>
                    </div>
                </div>
                <div className='right-mailrow'>
                    <span>12:20</span>
                    {props.icon}
                </div>
                <div className='hover-mailrow'>
                    <ArchiveIcon />
                    <DeleteOutlineIcon />
                    <DraftsIcon />
                    <AccessAlarmsIcon />
                </div>
        </div>
    </div>
  )
}

export default MailRow