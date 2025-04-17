import { useEffect, useState } from "react"
import "./App.css"
import CowCard from "./components/CowCard"

function App() {
  const [allCows, setAllCows] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/cows")
      .then((res) => res.json())
      .then((data) => setAllCows(data))
      .catch((err) => console.warn(err))
  }, [])

  return (
    <>
      <div className="cow-card-wrapper">
        {allCows.map((cow) => (
          <CowCard key={cow._id} cow={cow} />
        ))}
      </div>
    </>
  )
}

export default App
