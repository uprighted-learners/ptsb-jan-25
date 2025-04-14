import { useEffect, useState } from "react"

function Post({ post }) {
  const [comments, setComments] = useState([])

  const fetchComments = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
    )
    const json = await data.json()
    setComments(json)
  }

  return (
    <>
      <div className="post-body" key={post.id}>
        <h4>{post.title}</h4>
        {post.body}
        <div className="comment-link" onClick={fetchComments}>
          Show Comments
        </div>
      </div>
      {comments.map((comment) => (
        <div className="comment-body" key={comment.id}>
          {comment.body}
        </div>
      ))}
    </>
  )
}

export default Post
