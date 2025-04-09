/* 
    ? Using State in React
    state variables are ones that react keeps track of
    within a component, within a session

    initialized with useState()

    useState(param) returns an array with two elements
    0: the param (the initial value of the state variable)
    1: a function object that updates the state variable
*/
import Counter from "./Counter"
import "./App.css"

function App() {
  return (
    <>
      <Counter step={1} />
      <Counter step={2} />
      <Counter step={3} />
    </>
  )
}

export default App
