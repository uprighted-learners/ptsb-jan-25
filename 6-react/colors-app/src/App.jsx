import Bubble from "./components/Bubble"
import "./App.css"

function App() {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "purple",
  ]

  let backgroundColor = "red"
  const changeColor = (color) => {
    console.log("parent component:", color)
    backgroundColor = color
  }

  return (
    <>
      <div id="color-panel" style={{ backgroundColor }}></div>
      <div id="bubble-wrapper">
        {colors.map((c) => (
          <Bubble color={c} key={c} update={changeColor} />
        ))}
      </div>
    </>
  )
}

export default App
