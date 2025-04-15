import { useContext } from "react"
import { CountContext } from "../src/App"

function TodoItem({ item, todos, update }) {
  const { changedItemCount, setChangedItemCount } = useContext(CountContext)

  const toggleDone = () => {
    const newTodos = todos.map((t) => {
      if (t.id === item.id) t.completed = !t.completed
      return t
    })

    if (item.completed) {
      setChangedItemCount(changedItemCount + 1)
    } else {
      setChangedItemCount(changedItemCount - 1)
    }

    update(newTodos)
  }

  return (
    <>
      <div className={item.completed ? "done" : ""}>
        <input
          type="checkbox"
          defaultChecked={item.completed}
          onClick={toggleDone}
        />
        {item.title}
      </div>
    </>
  )
}

export default TodoItem
