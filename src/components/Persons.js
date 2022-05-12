import React, { Component } from "react";
import Person from './Person';
import ReducerExample from "./ReducerExample";
import Reaction from './Reaction';
import EffectExample from "./EffectExample";

class Personss extends Component{
    render(){
        return this.props.Persons.map((person, index) => {
          return (
          <div>
          <Person
          click= {() => this.props.click(index)}
          name={person.name}
          age={person.age}
        //   isAuthenticated ={this.props.isAuthenticated}
          key={person.id}
          change = {(event)=> this.props.change(event, person.id)} />
          <Reaction /> 
          <ReducerExample /> 
          <EffectExample />
    </div>
          )
}); 
}
}

export default Personss;        