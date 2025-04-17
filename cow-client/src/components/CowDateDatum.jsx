function CowDateDatum({ keyTitle, value }) {
  if (value) {
    return (
      <div className="cow-datum">
        {keyTitle}: {value}
      </div>
    )
  }
}

export default CowDateDatum
