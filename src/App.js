import './App.css';

function App() {
  const myName = "Chathu"; 

  function handleCLick() {
    alert(myName);
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <button 
        onClick={handleCLick}
      >
        Click Me
      </button>
      <br />
      {myName}
    </div>
  );
}

export default App;
