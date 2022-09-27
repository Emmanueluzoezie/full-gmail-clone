import { Avatar } from '@mui/material'
import React from 'react'
import MailHeader from '../components/MailHeader'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PrintIcon from '@mui/icons-material/Print';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./Mail.css"

const Mail = () => {
  return (
    <div className='mail'>
        <MailHeader />
        <div className='mail-body'>
            <div className='mail-body-header'>
            <h2>FREE Course / 3 more days!</h2>
            <div className="body-header-right">
                <span><PrintIcon /></span>
                <span><OpenInNewIcon /></span>
            </div>
            </div>
            
            <div className='mail-body-title'>
                <div>
                    <Avatar />
                    <div className='mail-name'>
                        <h4>Hype4 Academy <span>{"<"}jonueldev@gmail.com{">"}</span></h4>
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
            <div className=''>
            <h2>FREE Course / 3 more days!</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti pariatur ex adipisci necessitatibus provident corporis mollitia. Recusandae alias culpa odit voluptatibus minima iure nihil sequi commodi consequatur architecto, tempore iusto quod vero nulla exercitationem. Corporis ratione aut, tempora exercitationem nisi velit iure eum esse eligendi? Voluptatem non modi repellat obcaecati ex a culpa iusto, alias, necessitatibus qui molestias distinctio? In doloribus quia, quas quisquam velit qui. Sit nesciunt officiis nisi quidem non doloribus nam quo sed culpa fugit provident earum pariatur, et ab reprehenderit minus tempore maiores. Cumque earum at sed, eius suscipit error obcaecati minima repellendus nihil, laudantium doloribus. Harum quos vitae assumenda tenetur quisquam nihil nemo laudantium iure quo eos, ipsa odio accusantium molestiae provident voluptas nostrum facere porro exercitationem! Quam fuga eveniet cum est, hic autem! Mollitia totam, nobis magni corrupti, perspiciatis, tenetur eius eaque omnis obcaecati ipsam molestias similique fuga! Quae, esse quas. Eaque, cumque temporibus.</p>
            </div>
        </div>
    </div>
  )
}

export default Mail