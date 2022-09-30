import { Avatar } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DraftsIcon from '@mui/icons-material/Drafts';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import "./MailRow.css";
import {MailRowType } from "../pages/Inbox"
import { useDispatch } from "react-redux"
import { selectMail } from "../features/counter/mailSlice"
import { useNavigate } from 'react-router-dom';

const MailRow = ({id, description, subject, recipients}:MailRowType) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const openMail = () => {
        dispatch(
            selectMail({
                id,
                description, 
                subject, 
                recipients
            })
        )
        navigate("/mail")
    }

  return (
    <div className='mailrow'>
        <div className='' onClick={openMail}>
            <div className='left-mailrow'>
                    <Avatar className='avatar'/>
                    <div>
                        <input type="checkbox"/>
                        <StarBorderIcon />
                        {/* {item.icon} */}
                    </div>
                </div>
                <div className='center-mailrow'>
                    <h2>{recipients}</h2>
                    <div className='center-mailrow-body'> 
                        <h4>{subject}</h4>
                        <span>-</span>
                        <p>{description}</p>
                    </div> 
                </div>
                <div className='right-mailrow'>
                    <span>12:20</span>
                    <StarBorderIcon />
                    {/* {item.icon} */}
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