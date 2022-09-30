import { Avatar } from '@mui/material'
import React from 'react'
import MailHeader from '../components/MailHeader'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PrintIcon from '@mui/icons-material/Print';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./Mail.css"
import { selectOpenMail } from "../features/counter/mailSlice"
import { useSelector } from 'react-redux';

const Mail = () => {
    const selectedMail = useSelector(selectOpenMail)
    console.log(selectedMail)

  return (
    <div className='mail'>
        <MailHeader />
        <div className='mail-body'>
            <div className='mail-body-header'>
            <h2>{selectedMail?.subject}</h2>
            <div className="body-header-right">
                <span><PrintIcon /></span>
                <span><OpenInNewIcon /></span>
            </div>
            </div>
            
            <div className='mail-body-title'>
                <div>
                    <Avatar />
                    <div className='mail-name'>
                        <h4>Hype4 Academy <span>{"<"}{selectedMail?.recipients}{">"}</span></h4>
                        <span>to me <ArrowDropDownIcon /> </span>
                    </div>
                </div>

                <div className='mail-body-title-right'>
                    <h4>05:14 (2 hours ago)</h4>
                    <span><StarBorderIcon /></span>
                    <span><TurnLeftIcon /></span>
                    <span><MoreVertIcon /></span>
                </div>
            </div>
            <div className='description'>
            <h2>{selectedMail?.subject}</h2>
            <p>{selectedMail?.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Mail