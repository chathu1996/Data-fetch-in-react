import axios from "axios"
import { useState } from "react"
import './App.css';


function App() {

  const [users, setUsers] = useState([]);   

  async function handleClick() {
    const result = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(result.data);
    console.log(result.data);
  }

  return ( 
    <div className="App">
      <h1>Users List</h1> 
      <button onClick = { handleClick }>Get Users</button>
      <div className="list">
        {users.map( function fn(item){
          return (
            <div className="list-item">
              <div>{item.id}</div>
              <div className="user-name">{item.name}</div>
            </div>
          )
        })}
      </div>
      
    </div>
  );
}

export default App;
