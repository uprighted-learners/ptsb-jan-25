import { useState } from "react"

function Counter({ step }) {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount(count + step)}>count is {count}</button>
    </>
  )
}

export default Counter
