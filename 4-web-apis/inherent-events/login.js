const button = document.getElementById("submit")

const db = [
  { email: "dburrow@uprighted.com", password: "abc123" },
  { email: "santa@northpole.com", password: "cookies" },
  { email: "rudolph@northpole.com", password: "santa4ever" },
]

button.addEventListener("click", (event) => {
  const email = event.target.form[0].value
  const password = event.target.form[1].value

  const userArray = db.filter(
    (entry) => entry.email === email && entry.password == password
  )

  if (!(userArray.length === 1)) {
    console.log("bad credentials")
    event.preventDefault()
  }
})

const anchor = document.getElementById("google")

// override the default behavior entirely!
anchor.addEventListener("click", (e) => {
  e.preventDefault()
  window.location = "https://youtu.be/dQw4w9WgXcQ?feature=shared"
})
