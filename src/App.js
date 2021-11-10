import { useState } from 'react';
import './App.css';


function App() {
  let myName = "Chathu"; 
  // hook
  const [myName2, setMyName2] =  useState("Wije ");
  const [num, setNum] = useState(18);

  function handleCLick() {
     myName = "Perera";
    //  myName2 = "Perera";
     setMyName2("Perera");
  }
  function increase(){
    setNum(num + 1);
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={ handleCLick }>Click Me</button>
      <button onClick={ increase }>Increase Number</button>
      <br />
      {myName}
      <br />
      { myName2 }
      <br />
      Number : {num}
    </div>
  );
}

export default App;
