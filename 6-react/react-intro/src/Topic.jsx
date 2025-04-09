function Topic({ topic }) {
  const rating = Math.floor(Math.random() * 5)

  return (
    <div className="topic-card">
      {topic}
      <div className="rating">rating: {rating}</div>
    </div>
  )
}

export default Topic
