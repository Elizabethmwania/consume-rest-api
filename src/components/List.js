
import React from 'react';

const name = 'Elizabeth';
const element = <h1>Hello {name}.Lets learn Rest API</h1>
//lists and mapping (key)
const numbers = [1,2,3,4,5];
const updateNumbers = numbers.map((number)=>{
  return <li>{number}</li>;
})
function App() {
  return (
    <div>
      {element}
      <div>
        <ul>{updateNumbers}</ul>
      </div>
      <div>
        <h1>METHODS AS PROPS</h1>
        <parentComponent />
      </div>
    </div>
  );
}

export default App;
