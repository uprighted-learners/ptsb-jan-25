import Topic from "./Topic"

function TopicBoard() {
  const topics = ["HTML", "CSS", "Javascript", "Node", "Express", "MongoDB"]

  return (
    <>
      {topics.map((topic) => (
        <Topic topic={topic} more="stuff" topics={topics} />
      ))}
    </>
  )
}

export default TopicBoard
