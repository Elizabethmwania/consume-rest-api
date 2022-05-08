import React, { Component } from 'react';
import './Styles/App.css';
// import Person from './components/Person';
import Personss from './components/Persons';
class App extends Component{
state = {
  Persons:[
    {id: 'one', name:'Gitonga', age:50},
    {id: 'two', name:'Alice', age:20}
  ],
  otherState: 'some otherstate',
  showPersons:false
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
  render(){
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
      
    // };
    let Persons = null;
    if(this.state.showPersons){
      Persons = (
        <div>
          <Personss
           Persons = {this.state.Persons}
           click = {this.deletePersonHandler}
           change = {this.changeEvenHandler} />
        {/* {this.state.Persons.map((person, index) => {
          return <Person
          click={this.deletePersonHandler}
          name={person.name}
          age={person.age}
          key={person.id}
          change = {(event)=> this.changeEvenHandler(event, person.id)} />
        })} */}
        </div>
      // <div>
      // <Person name= {this.state.Persons[0].name} 
      //  click={this.swtchEventHandler.bind(this, 'Mukusya')}
      //  age={this.state.Persons[0].age}></Person>
      // <Person name= {this.state.Persons[1].name}
      //  change = {this.changeEvenHandler} 
      //  age={this.state.Persons[1].age} />
      // <Person name='mwas' age='27'>I like singing</Person>
      // </div> 
      );
      // style.backgroundColor='red';
      
    }
    // const classes = [];
    // if (this.state.Persons.length <=2){
    //   classes.push('red');//class red
    // }
    // if (this.state.Persons.length <=1){
    //   classes.push('bold');//class bold+red
    // }

    return (
  <div className='App'>
      {/* <h1>Hey There!</h1>
      <p className={classes.join(' ')}>Styling Dynamically</p>
      <button  
      //  {/* onClick={this.swtchEventHandler.bind(this, 'Mukusya')} > click me</button>*/}
     {/* onClick={this.togglePersonHandler} */}
      {/* >Switch Name</button>  */} 
      {Persons}
  </div>
  );
}
  
}


export default App;
