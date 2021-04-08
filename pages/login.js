import React,{useState,useContext} from 'react'
import Input from '../components/Input'
import {AuthContext} from '../contexts/authcontext'
export default function login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const {loggedIn,loginHandler} = useContext(AuthContext)
    console.log(loggedIn)
    function emailChangeHandler (e){

        setEmail(e.target.value)
    }

    function passwordChangeHandler (e){

        setPassword(e.target.value)
    }
    return (
        <div style={{margin:"1% 25% 1% 25%"}} >
            <form onSubmit={(e)=>{e.preventDefault();loginHandler({email,password})}} >
            <Input type ="email" inputChangeHandler={emailChangeHandler}  placeholder="Email" value={email} style={{width:"50%",height:"auto"}} />
             <Input type ="password" inputChangeHandler={passwordChangeHandler} placeholder="Password" style={{width:"50%",height:"auto"}} value={password} />
            <button >Log In</button>
            </form>
        </div>
    )
}
