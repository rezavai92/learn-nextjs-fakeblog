import React ,{useState,useContext}from 'react'
import Input from '../components/Input'
import {AuthContext} from '../contexts/authcontext'
export default function signup() {

    const [name,setName ] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmedPassword,setConfirmedPassword] = useState("")
    const {userSignUpHandler} = useContext(AuthContext)
    const nameChangeHandler=(e)=>{
        setName(e.target.value)
    }
    const emailChangeHandler=(e)=>{
            setEmail(e.target.value)
    }

    const passwordChangeHandler = (e)=>{
        setPassword(e.target.value)
    }

    const confirmPasswordChangeHandler =(e)=>{
        setConfirmedPassword(e.target.value)

    }

    const signupHandler = (e)=>{

        e.preventDefault()
        userSignUpHandler({name,email,password})

        
    }
    return (
        <div>
            <form onSubmit={signupHandler}>
            <Input type ="text" required={true} placeholder ="Name" value={name} inputChangeHandler={nameChangeHandler} />
            <Input type ="email" required={true} placeholder ="Email" value={email} inputChangeHandler={emailChangeHandler} style={{width:"50%" ,height:'auto'}} />
            <Input type ="password" required={true} placeholder ="Password" value={password} inputChangeHandler={passwordChangeHandler} />
            <Input type ="password" required={true} placeholder ="Confirm Password" value={confirmedPassword} inputChangeHandler={confirmPasswordChangeHandler} />
            <button>Sign Up</button>
            </form>
        </div>
    )
}
