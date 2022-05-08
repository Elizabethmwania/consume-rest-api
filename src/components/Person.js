import React, { Component } from "react";
import '../Styles/Person.css';
import {AuthContext} from '../App'

class Person extends Component{
    render(){
        return(
            
        <div className="Person">
        <AuthContext.Consumer>
        {auth => auth ? <p>I am authenticated</p> : null }
         {/* {this.props.isAuthenticated ? <p>I am authenticated</p> : null} */}
        </AuthContext.Consumer>    
         <p onClick={this.props.click}> Hello I'm {this.props.name} with {this.props.age} 
         years old. {this.props.children} </p>
         <input type='text' onChange={this.props.change} value={this.props.name} />
        </div>
        )
    }
} 

export default Person;