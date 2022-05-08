import { Component } from "react";

const TestProps = (props)=>{
    return<p>Here goes {props.name}</p>
}

export default TestProps;
///class comp
class app extends Component{
    state = {persons:[
        {name:'liz',age:3},
        {name:'ivy', age:5}
    ],
    otherState:'another one',
}
changeState = (newName) => {
    this.setState({persons:[
        {name:'another',age:100},
        {name:newName ,age:80}
    ]})
}
    render(){
        return(
            <div>
                <button onClick={this.changeState.bind(this,'anotherperson')} >click</button>
                <p>My name is {this.state.persons[0].name} </p>
            </div>
        )
    }
}
