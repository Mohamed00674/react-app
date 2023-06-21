import react from 'react'
import { useState ,useEffect } from 'react';
//import Person from './components/Person'
import "./App.css";


/* function App() {
  const name = "john";
  const isShowing = true;

  return (
    <div className="App">
      <h1>hello {!isShowing ? name : 'someone'}</h1>
      <Person name ='mohamed' lastname = "ahmed" age = "24" />
     </div>
  );
}
 */
function App() {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    alert("hello world")
  } )
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount -1 ) }>-</button>
      <h1>{ counter}</h1>
      <button onClick={() => setCounter((prevCount)=> prevCount +1 ) } >+</button>
    </div>
  )
}
export default App;
