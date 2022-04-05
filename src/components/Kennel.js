import React from "react"
import "./Kennel.css"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

export const Kennel = () => {
    const someVars ={
        name: "Happy",
        address: "401 State Street",
        zip: 47657
    }

   return ( 
    //implicit return, only can return 1 element
    //if using a return statement with multiple lines, need to use curly braces
    <>
        <NavBar />
        <ApplicationViews />
    </>
)
}