import React, { Component } from "react";
import Person from './Person';

class Personss extends Component{
    render(){
        return this.props.Persons.map((person, index) => {
          return <Person
          click= {() => this.props.click(index)}
          name={person.name}
          age={person.age}
        //   isAuthenticated ={this.props.isAuthenticated}
          key={person.id}
          change = {(event)=> this.props.change(event, person.id)} />
}); 
}
}
export default Personss;        