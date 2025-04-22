import { useEffect, useState } from "react"
import CowCard from "../components/CowCard"
import AddCowCard from "../components/AddCowCard"

function Dashboard() {
  const [allCows, setAllCows] = useState([])

  const getAllCows = () => {
    fetch("http://localhost:4000/cows")
      .then((res) => res.json())
      .then((data) => setAllCows(data))
      .catch((err) => console.warn(err))
  }

  useEffect(() => {
    getAllCows()
  }, [])

  return (
    <>
      <div className="cow-card-wrapper">
        {allCows.map((cow) => (
          <CowCard key={cow._id} cow={cow} />
        ))}
        <AddCowCard refreshCows={getAllCows} />
      </div>
    </>
  )
}

export default Dashboard
