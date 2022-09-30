import { Button } from '@mui/material'
import "./Login.css"

const Login = () => {
  return (
    <div className='login'>
        <div className='login-item'>
            <img src='https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg'/>
            <Button>login</Button>
        </div>
    </div>
  )
}

export default Login