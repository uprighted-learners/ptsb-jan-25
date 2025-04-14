import { useEffect, useState } from "react"
import TodoItem from "../components/TodoItem"
import "./App.css"

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    // console.log("useEffect!")

    fetch(`https://jsonplaceholder.typicode.com/todos?userId=1`)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.warn(err))
  }, [])

  return (
    <>
      {todos.map((item) => (
        <TodoItem
          item={item}
          key={item.title}
          update={setTodos}
          todos={todos}
        />
      ))}
    </>
  )
}

export default App
