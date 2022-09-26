import InboxIcon from '@mui/icons-material/Inbox';
import "./InputHeader.css"

const InputHeader = () => {
  return (
    <div className='input-header'>
        <div>
            <InboxIcon />
            <div className='title-items'>
                <p>Primary</p>
            </div>
        </div>
        <div>
            <InboxIcon />
            <div className='titles'>
                <div className='title-items'>
                    <h5>Promotions</h5>
                    <span className='promotion'>9 new</span>
                </div>
                <p>companys</p>
            </div>
        </div>
        <div>
            <InboxIcon />
            <div className='titles'>
                <div className='title-items'>
                    <h5>Promotions</h5>
                    <span className='social'>9 new</span>
                </div>
                <p>companys</p>
            </div>
        </div>
    </div>
  )
}

export default InputHeader