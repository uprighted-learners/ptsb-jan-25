import { useContext, useEffect, useState } from "react"
import { UserContext } from "../App"

function AddCowCard({ refreshCows }) {
  const [breeds, setBreeds] = useState([])
  const [name, setName] = useState("")
  const [sex, setSex] = useState("")
  const [dob, setDob] = useState()
  const [selectedBreed, setSelectedBreed] = useState("")
  const [appearance, setAppearance] = useState("")

  const { token } = useContext(UserContext)

  useEffect(() => {
    fetch(`http://localhost:4000/breeds/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error()
        }
        return res.json()
      })
      .then((data) => setBreeds(data))
      // TODO: surface this to the user? stop them from making a cow?
      .catch((err) => console.error(err))
  }, [])

  const handleSaveCow = () => {
    const breed = breeds.find((b) => b.name === selectedBreed)

    fetch("http://localhost:4000/cows/", {
      method: "POST",
      body: JSON.stringify({ name, sex, dob, breed: breed._id, appearance }),
      headers: { "Content-Type": "application/json", authorization: token },
    }).then((res) => {
      if (res.ok) {
        refreshCows()
        setName("")
        setSex("")
        setDob("")
        setSelectedBreed("")
        setAppearance("")
      } else {
        // TODO: surface failure to user
      }
    })
  }

  return (
    <div className="cow-card">
      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
      </div>
      <div>
        <span>Sex: </span>
        <input
          type="radio"
          name="sex"
          id="male"
          value="M"
          checked={sex === "M"}
          onChange={(e) => setSex(e.target.value)}
        />
        <label htmlFor="male">Male</label>
        <input
          value="F"
          type="radio"
          name="sex"
          id="female"
          checked={sex === "F"}
          onChange={(e) => setSex(e.target.value)}
        />
        <label htmlFor="female">Female</label>
      </div>
      <div>
        <label htmlFor="dob">Date of Birth: </label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => {
            setDob(e.target.value)
          }}
        />
      </div>
      <div>
        <label htmlFor="breed">Breed:</label>
        <select
          id="breed"
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          {/* TODO: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>. Stack:  */}
          <option value="" disabled selected>
            Select a breed
          </option>
          {breeds.map((breed) => (
            <option key={breed._id}>{breed.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="appearance">Appearance: (optional)</label>
        <input
          type="text"
          id="appearance"
          value={appearance}
          onChange={(e) => {
            setAppearance(e.target.value)
          }}
        />
      </div>
      <button onClick={handleSaveCow}>Save Cow</button>
    </div>
  )
}

export default AddCowCard
