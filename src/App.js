import react from 'react'
import Person from './components/Person'
import "./App.css";


function App() {
  const name = "john";
  const isShowing = true;

  return (
    <div className="App">
      <h1>hello {!isShowing ? name : 'someone'}</h1>
      <Person name ='mohamed' />
      <Person/>
    </div>
  );
}

export default App;
