import React from "react";

const Cockpit = (props)=>{
    const classes = [];
    if (props.Persons.length <=2){
      classes.push('red');//class red
    }
    if (props.Persons.length <=1){
      classes.push('bold');//class bold+red
    }
    return(
    <div>
      <h1>Hey There!</h1>
      <p className={classes.join(' ')}>Styling Dynamically</p>
      <button onClick={props.click}>Switch Name</button> 
      <button onClick={props.login}>Log in</button>
      
    </div>
    )
}
export default Cockpit;