const contents = document.getElementById("contents")
const contents2 = document.getElementById("contents2")

// fetch("https://api.kanye.rest")
//   .then((res) => {
//     return res.json()
//   })
//   .then((data) => (contents.innerText = data.quote))

// const getQuote = async () => {
//   const response = await fetch("https://api.kanye.rest")
//   const data = await response.json()
//   contents2.textContent = data.quote
// }

// getQuote()

fetch("https://jsonplaceholder.typicode.com/todos?userId=4")
  .then((res) => {
    console.log(res)
    return res.json()
  })
  .then((data) => {
    data.forEach((todo) => {
      const item = document.createElement("li")
      item.textContent = todo.title
      if (todo.completed) {
        item.style.textDecoration = "line-through"
      }
      contents.append(item)
    })
  })

const getTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?userId=4")
  const json = await res.json()

  json.forEach((todo) => {
    const item = document.createElement("li")
    item.textContent = todo.title
    if (todo.completed) {
      item.style.textDecoration = "line-through"
    }
    contents.append(item)
  })
}

getTodos()
