import React, { Component } from 'react';
import './Styles/App.css';
// import Person from './components/Person';
import Personss from './components/Persons';
import Cockpit from './components/Cockpit';

export const AuthContext = React.createContext(false); 

class App extends Component{
  constructor(props){
    super(props);
    //  console.log('[App.s] Inside Constructor', props);
    this.state= {
      Persons:[
         {id: 'one', name:'Gitonga', age:50},
         {id: 'two', name:'Alice', age:20}
      ],
      otherState: 'some otherstate',
      showPersons:false,
      authenticated: false
 }
}
 
swtchEventHandler = (newName) =>{
 // console.log('was clicked');
this.setState({
  Persons:[
    {name: newName, age:50},
    {name:'Ann', age:20}

  ]
})
}
changeEvenHandler = (event, id) =>{
  const personIndex = this.state.Persons.findIndex(p => {
    return p.id === id;
  });
  const person = {...this.state.Persons[personIndex]};
  //const person =Object.assign({}, this.state.Persons[personIndex])
 
  person.name = event.target.value;
  
  const Persons = [...this.state.Persons];
  Persons[personIndex]=person;

  this.setState({Persons:Persons})
}
togglePersonHandler=()=>{
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}
deletePersonHandler = (personIndex)=>{
  //const Persons =this.state.Persons.slice();
  const Persons = [...this.state.Persons]
  Persons.splice(personIndex,1);
  this.setState({Persons:Persons})
}
loginHandler = () =>{
  this.setState({authenticated: true}); 

}
  render(){
   
    let Persons = null;
    if(this.state.showPersons){
      Persons =
          <Personss
           Persons = {this.state.Persons}
           click = {this.deletePersonHandler}
           change = {this.changeEvenHandler} />
          //  isAuthenticated={this.state.authenticated} />
        
    }
    
  return (
  <div className='App'>
    <Cockpit showPersons={this.state.showPersons}
    Persons={this.state.Persons}
    login = {this.loginHandler}
    click={this.togglePersonHandler} /> 
    <AuthContext.Provider  value={this.state.authenticated}>{Persons}</AuthContext.Provider> 
  </div>
  );
}  
}

export default App;
