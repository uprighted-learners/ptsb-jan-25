import { useEffect, useState } from "react"
import Post from "./Post"
import "./App.css"

function App() {
  const [posts, setPosts] = useState([])
  const [currentUser, setCurrentUser] = useState(1)
  const [userData, setUserData] = useState({})

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${currentUser}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.err("???: ", err))

    fetch(`https://jsonplaceholder.typicode.com/users/${currentUser}`)
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.err("???: ", err))
  }, [currentUser])

  return (
    <>
      <span>User: </span>
      <select onChange={(e) => setCurrentUser(e.target.value)}>
        {nums.map((n) => (
          <option key={n}>{n}</option>
        ))}
      </select>
      <div className="user-card">
        <h2>{userData.name}</h2>
        <a href={`http://www.${userData.website}`}>{userData.website}</a>
      </div>

      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  )
}

export default App
