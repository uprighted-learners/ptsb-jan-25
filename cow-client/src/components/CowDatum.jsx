function CowDatum({ keyTitle, value }) {
  if (value) {
    const date = new Date(value)
    const output = isNaN(date.getTime()) ? value : date.toLocaleDateString()

    // let output = value
    // if (!isNaN(date.getTime())) output = date.toLocaleDateString()

    return (
      <div className="cow-datum">
        {keyTitle}: {output}
      </div>
    )
  }
}

export default CowDatum
