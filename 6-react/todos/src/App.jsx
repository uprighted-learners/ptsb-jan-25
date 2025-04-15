import { createContext, useContext, useEffect, useState } from "react"
import TodoItem from "../components/TodoItem"
import "./App.css"

export const CountContext = createContext(0)

function App() {
  const [todos, setTodos] = useState([])
  const [changedItemCount, setChangedItemCount] = useState(0)

  useEffect(() => {
    // console.log("useEffect!")

    fetch(`https://jsonplaceholder.typicode.com/todos?userId=1`)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.warn(err))
  }, [])

  return (
    <CountContext.Provider value={{ changedItemCount, setChangedItemCount }}>
      <h4>In this session you have completed {changedItemCount} items</h4>
      {todos.map((item) => (
        <TodoItem
          item={item}
          key={item.title}
          update={setTodos}
          todos={todos}
        />
      ))}
    </CountContext.Provider>
  )
}

export default App
