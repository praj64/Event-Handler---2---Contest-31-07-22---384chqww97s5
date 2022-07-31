import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleClick = (event) =>{
    console.log(event);

  }

  // do not remove the two buttons or change their id
  return (
    <div id="main">
      <button id="button-a">Button A</button>
      <button id="button-b">Button B</button>
    </div>
  )
}


export default App;
