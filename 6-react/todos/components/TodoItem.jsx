function TodoItem({ item, todos, update }) {
  // let doneString = ""
  // if (item.completed) doneString = "done"

  const toggleDone = () => {
    const newTodos = todos.map((t) => {
      if (t.id === item.id) t.completed = !t.completed
      return t
    })

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
