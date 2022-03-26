
function Food ({name}){
  return(<h3>I love {name}</h3>)
}

function App() {
  return (
    <div className="App">
    <h1>Hello!!</h1>
    <Food name="burger"/>
    <Food name="spagetis"/>
    <Food name="sandwiches"/>
    <Food name="lasagna"/>
    </div>
  );
}

export default App;
