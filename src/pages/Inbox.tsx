import React, { useEffect, useState } from 'react'
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
import { useForm } from "react-hook-form";
import { db } from "../firebase"
import { collection, addDoc, getDocs } from "firebase/firestore"; 
// import firebase from "firebase/firestore"
import { Timestamp } from 'firebase/firestore'



export type MailRowType = {
  // icon: any,
  id:string,
  recipients: string,
  subject: string,
  description: string,
  // image: string
  // time: number | Symbol,
}

export type emailType = {
  data:MailRowType,
  id: string
}

const Inbox = () => {
  const [emails, setEmails] = useState<any>([])
  const {compose, setCompose, composeDropDown, setComposeDropDown} = useContextState()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async (data:any): Promise<any> => {
    try {
      const docRef = await addDoc(collection(db, "emails"), {
        recipients: data.recipients || null,
        subject: data.subject || null,
        description: data.description || null,
        // timestamp: Timestamp || null,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setCompose(false)
  };

  useEffect(() => {
    async function getCities(db:any) {
      const citiesCol = collection(db, 'emails');
      const citySnapshot = await getDocs(citiesCol); 
      if (citySnapshot) {
        setEmails(citySnapshot.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id
      })))
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      
    }
    getCities(db)
  },[])

  emails && console.log(emails)
  


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
          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='Recipients' type="email"   {...register("recipients", { required: true })} />
            <input placeholder='Subject' type="text"  {...register("subject", { required: true })} />
            <input placeholder='description' type="text" className='textarea'  {...register("description", { required: true })} />
          <div className='compose-footer'>
            <div className='send-button'>
              <input type="submit" />
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
          </form>
        </div>}
      <PagesHeader />
      <InputHeader />
      {emails.map(({data:{description, subject, recipients}, id}:emailType) => (
        // console.log(description)
          <MailRow key={id} id={id} description={description} subject={subject} recipients={recipients}/>
      ))}
    </div>
  )
}

export default Inbox