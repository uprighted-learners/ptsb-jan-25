function CowDatum({ keyTitle, value }) {
  if (value) {
    return (
      <div className="cow-datum">
        {keyTitle}: {value}
      </div>
    )
  }
}

export default CowDatum
