import { useEffect, useState } from "react"
import CowDatum from "./CowDatum"

// TODO: should we be passing breeds in as a prop?
function CowCard({ cow, setEditCowId }) {
  const [breed, setBreed] = useState({})

  let weightField
  if (cow.weight) {
    weightField = (
      <div className="cow-datum">
        weight: {cow.weight} {cow.weightUnit}
      </div>
    )
  }

  useEffect(() => {
    fetch(`http://localhost:4000/breeds/${cow.breed}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error()
        }
        return res.json()
      })
      .then((data) => setBreed(data))
      .catch((err) => setBreed({ name: null }))
    // .finally(() => console.log(cow.name, breed))
  }, [])

  return (
    <div className="cow-card">
      <img
        className="cow-image"
        src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg"
        alt=""
      />
      <h3 className="cow-name">{cow.name}</h3>
      <CowDatum
        keyTitle="breed"
        value={breed.name}
        url={`breed/${breed._id}`}
      />
      <CowDatum keyTitle="DOB" value={cow.dob} />
      <CowDatum keyTitle="sex" value={cow.sex} />
      <CowDatum keyTitle="castrated on" value={cow.castratedDate} />
      <CowDatum keyTitle="died on" value={cow.deceasedDate} />
      <CowDatum keyTitle="appearance" value={cow.appearance} />
      {weightField}
      <div className="edit-icon" onClick={() => setEditCowId(cow._id)}>
        ✏️
      </div>
    </div>
  )
}

export default CowCard
