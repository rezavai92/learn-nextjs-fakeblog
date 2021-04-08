import React,{createContext,useState} from 'react'

export const AuthContext = createContext()
export default function authcontext(props) {

    const [loggedIn,setLoggedIn] = useState(false)

    const loginHandler = ({email,password})=>{

        if(email && password){
            setLoggedIn(true)
        }
    }

    const userSignUpHandler = ({name,email,password})=>{



    }
    return (
      <AuthContext.Provider value={{loggedIn,loginHandler,userSignUpHandler}}  >
          {props.children}
      </AuthContext.Provider>
    )
}
