import CowDatum from "./CowDatum"
import CowDateDatum from "./CowDateDatum"

function CowCard({ cow }) {
  let weightField
  if (cow.weight) {
    weightField = (
      <div className="cow-datum">
        weight: {cow.weight} {cow.weightUnit}
      </div>
    )
  }

  return (
    <>
      <div className="cow-card">
        <img
          className="cow-image"
          src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg"
          alt=""
        />
        <h3 className="cow-name">{cow.name}</h3>
        <CowDatum keyTitle="breed" value={cow.breed} />
        <CowDateDatum keyTitle="DOB" value={cow.dob} />
        <CowDatum keyTitle="sex" value={cow.sex} />
        <CowDatum keyTitle="castrated on" value={cow.castratedDate} />
        <CowDatum keyTitle="died on" value={cow.deceasedDate} />
        <CowDatum keyTitle="appearance" value={cow.appearance} />
        {weightField}

        {/* TODO: add name of breed and link to breed page */}
      </div>
    </>
  )
}

export default CowCard
