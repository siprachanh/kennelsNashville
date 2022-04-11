import React, {useState} from "react"
import "./Kennel.css"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

export const Kennel = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

   return ( 
    //implicit return, only can return 1 element
    //if using a return statement with multiple lines, need to use curly braces
    <>
        <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
        <ApplicationViews 
         setAuthUser={setAuthUser}
         isAuthenticated={isAuthenticated}
         setIsAuthenticated={setIsAuthenticated}
        />
    </>
)
}

//the entry point of app is Kennel.js; need to determin if User is already auth
//create a method to set the auth (login) and method to remove the auth (logout)
//then pass approproriate props to NavBar and AppViews
//look inside sessionStor for a User
//isAuth
