import { useState } from "react"
import TodoItem from "../components/TodoItem"
import "./App.css"

function App() {
  const starterTodos = [
    {
      id: 1,
      title: "walk the fish",
      completed: false,
    },
    {
      id: 2,
      title: "mow the dishes",
      completed: false,
    },
    {
      id: 3,
      title: "mop the laundry",
      completed: true,
    },
  ]

  const [todos, setTodos] = useState(starterTodos)

  console.log("App renders")

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
