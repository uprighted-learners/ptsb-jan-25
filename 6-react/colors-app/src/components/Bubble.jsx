function Bubble({ color, update }) {
  return (
    <div
      className="bubble"
      onClick={() => update(color)}
      style={{ backgroundColor: color }}
    ></div>
  )
}

export default Bubble
