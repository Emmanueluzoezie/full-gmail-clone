import React from 'react'
import "./Inbox.css"
import PagesHeader from '../components/PagesHeader'
import InputHeader from '../components/InputHeader'
import MailRow from '../components/MailRow'
import { useContextState } from '../context/contextProvider'
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { composeIcons } from '../data/data'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export type MailRowType = {
  icon: any,
  name: string,
  title: string,
  description: string,
  time: number,
}

const Inbox = () => {
  const {compose, setCompose, composeDropDown, setComposeDropDown} = useContextState()


  return (
    <div  className='inbox'>
      {compose && <div className='compose-text'>
          <div className='compose-header'>
            <h2>New message</h2>
            <div className='compose-header-icons'>
              <RemoveIcon />
              <OpenInFullIcon />
              <CloseIcon  onClick={() => setCompose(false)}/>
            </div>
          </div>
          <form>
            <input placeholder='Recipients'/>
            <input placeholder='Subject'/>
            <textarea />
          </form>
          <div className='compose-footer'>
            <div className='send-button'>
              <button>Send</button>
              <div className='send-button-icon'>
                <ArrowDropDownIcon onClick={() => setComposeDropDown(prev => !prev)} />
                {composeDropDown && <ul className='dropdown-content'>
                    <li>
                      <ScheduleSendIcon />
                      <p>Schedule send</p>
                    </li>
                  </ul>}
              </div>
            </div>
            <div>
              {composeIcons.map((item, index) => (
                <span className='compose-footer-icon' key={index}>{item}</span>
              ))}
            </div>
            <DeleteOutlineIcon style={{marginLeft:"20px"}}/>
          </div>
        </div>}
      <PagesHeader />
      <InputHeader />
      <MailRow icon={<StarBorderIcon />}/>
      <MailRow />
      <MailRow />
      <MailRow />
      <MailRow />
      <MailRow />
      <MailRow />
      <MailRow />
      <MailRow />
      <MailRow />
      <MailRow />
    </div>
  )
}

export default Inbox