import React, { useState } from "react"


export const PropsAndState = ({ yourName, mycohort, someVars }) => {
    let [countClicks, setCountClicks] = useState(5)
    //useState is a hook 
    //the onclick is a fn 
    let {name,address, zip} = someVars;
    
    const handleClick = () => {
      //good practice:
      //make a copy of state, modify it, and then setState to the copy
      const newCountClicks = ++countClicks
      setCountClicks(newCountClicks)
    }
  
    return (
      <>
        <h3>Welcome, {yourName} </h3>
        <p> myCohort is {mycohort}</p>
       <p>{someVars.name}{someVars.address}{someVars.zip}</p>
        <p>{countClicks}</p>
        <button onClick={(handleClick)}>Click Me</button>
      </>
    )
  }

// export const PropsAndState = ({yourName, mycohort, someVars}) => {
// //deconstruct prop: give yourName, can reference; react is expecting an object to 
// //be passed in: the two values
// // if not deconstructed: props.yourName
// //look at the prop, create a variable
// //each component gets its own prop object






