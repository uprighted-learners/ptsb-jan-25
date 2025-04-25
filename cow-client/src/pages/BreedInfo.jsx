import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import CowDatum from "../components/CowDatum"
import CowCard from "../components/CowCard"

function BreedInfo() {
  const [breed, setBreed] = useState({})
  const [cows, setCows] = useState([])
  const { breedId } = useParams()

  useEffect(() => {
    fetch(`http://localhost:4000/breeds/${breedId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error()
        }
        return res.json()
      })
      .then((data) => setBreed(data))
      .catch((err) => setBreed(null))

    fetch(`http://localhost:4000/cows/breed/${breedId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error()
        }
        return res.json()
      })
      .then((data) => setCows(data))
      .catch((err) => console.warn(err.message))
  }, [])

  if (!breed) {
    return <Navigate to="/404" replace />
  }

  return (
    <>
      {/* TODO: make this look nice */}
      {/* TODO: actual image of breed? */}
      <img className="breed-image" src="/public/cow.jpg" alt="" />
      <h1>{breed.name}</h1>
      <h4>{breed.description}</h4>
      <CowDatum keyTitle="primary purpose" value={breed.primaryPurpose} />
      <CowDatum keyTitle="secondary purpose" value={breed.secondaryPurpose} />

      <div className="cow-card-wrapper">
        {cows.map((cow) => (
          <CowCard key={cow._id} cow={cow} />
        ))}
      </div>
    </>
  )
}

export default BreedInfo
