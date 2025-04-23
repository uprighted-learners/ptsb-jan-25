import { useEffect, useState } from "react"
import CowCard from "../components/CowCard"
import AddCowCard from "../components/AddCowCard"
import CowEditCard from "../components/CowEditCard"

function Dashboard() {
  const [allCows, setAllCows] = useState([])
  const [editCowId, setEditCowId] = useState()

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
        {allCows.map((cow) =>
          editCowId === cow._id ? (
            <CowEditCard />
          ) : (
            <CowCard key={cow._id} cow={cow} setEditCowId={setEditCowId} />
          )
        )}
        <AddCowCard refreshCows={getAllCows} />
      </div>
    </>
  )
}

export default Dashboard
