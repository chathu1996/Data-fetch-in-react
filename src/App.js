  import './App.css';


function App() {
  // arrays of objects
  const myArray = [
    {name: "Silva", age: 32},
    {name: "Kamal", age: 30},
    {name: "Perera", age: 18},
    {name: "Chamara", age: 21},
  ];

  return (
    <div className="App">
      <h1>Hello</h1>
      { myArray.map(function mapFunction(item) {
           return <h1>{ item.name }, { item.age }</h1>;
      })}
    </div>
  );
}

export default App;
