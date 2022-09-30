import { Button } from '@mui/material'
import "./Login.css"
import { auth, authProvider } from '../firebase'
import { useDispatch } from 'react-redux'
import { login } from '../features/counter/userSlice'

export type User = {
    displayName:string | undefined
}

const Login = () => {
    const dispatch = useDispatch()

    const signIn =() => {
        auth.signInWithPopup(authProvider)
        .then(({user}) => {
            dispatch(
                login({
                    displayName: user?.displayName,
                    photoUrl: user?.photoURL,
                    email: user?.email
                })
            )
        })
    }

  return (
    <div className='login'>
        <div className='login-item'>
            <img src='https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg'/>
            <Button onClick={signIn}>login</Button>
        </div>
    </div>
  )
}

export default Login