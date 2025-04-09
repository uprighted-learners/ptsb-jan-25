import { useState } from "react"
import Bubble from "./components/Bubble"
import "./App.css"

function App() {
  const [backgroundColor, setBackgroundColor] = useState()

  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "purple",
  ]

  return (
    <>
      <div id="color-panel" style={{ backgroundColor }}></div>
      <div id="bubble-wrapper">
        {colors.map((c) => (
          <Bubble color={c} key={c} update={setBackgroundColor} />
        ))}
      </div>
    </>
  )
}

export default App
