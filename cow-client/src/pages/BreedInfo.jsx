import { useParams } from "react-router-dom"

function BreedInfo() {
  const { breedId } = useParams()

  return <>Breed info goes here: {breedId}</>
}

export default BreedInfo
