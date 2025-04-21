function CowDatum({ keyTitle, value, url }) {
  if (value) {
    const date = new Date(value)
    // let output = isNaN(date.getTime()) ? value : date.toLocaleDateString()

    let output = value
    if (!isNaN(date.getTime())) output = date.toLocaleDateString()
    if (url) output = <a href={url}>{output}</a>

    return (
      <div className="cow-datum">
        {keyTitle}: {output}
      </div>
    )
  }
}

export default CowDatum
