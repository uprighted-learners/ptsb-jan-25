const contents = document.getElementById("contents")
const contents2 = document.getElementById("contents2")

// make a fetch and then handle the response (a promise) using resolvers
// fetch("https://api.kanye.rest")
//   .then((res) => res.json())
//   .then((data) => (contents.innerText = data.quote))

// // do the exact same thing, with async/await instead of resolvers
// const getQuote = async () => {
//   const response = await fetch("https://api.kanye.rest")
//   const data = await response.json()
//   contents2.textContent = data.quote
// }

// getQuote()

fetch("https://jsonplaceholder.typicode.com/todos?userId=4")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Bad HTTP Response")
      console.log("bad http response")
    }
    return res.json()
  })
  .then((json) => {
    json.forEach((todo) => {
      const item = document.createElement("li")
      item.textContent = todo.title
      if (todo.completed) {
        item.style.textDecoration = "line-through"
      }
      contents.append(item)
    })
  })
  .catch((err) => {
    contents.innerText = `something went wrong: ${err}`
  })
  .finally(() => console.log("it's over"))

const getTodos = async () => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todo?userId=4"
    )

    if (!res.ok) {
      throw new Error("Bad HTTP Response 2")
    }

    const json = await res.json()

    json.forEach((todo) => {
      const item = document.createElement("li")
      item.textContent = todo.title
      if (todo.completed) {
        item.style.textDecoration = "line-through"
      }
      contents.append(item)
    })
  } catch (err) {
    contents2.innerText = `something went wrong: ${err}`
  } finally {
    console.log("it's over 2")
  }
}

getTodos()
