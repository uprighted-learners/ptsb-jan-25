console.log("hello world")

const topics = [
  "HTML",
  "CSS",
  "JS",
  "Web APIs",
  "Servers",
  "Databases",
  "React",
  "Agile",
]

const list = document.createElement("ol")
document.body.appendChild(list)

const populateWebAPIContent = () => {
  // TODO: redo this with a loop
  const subList = document.createElement("ul")
  const dom = document.createElement("li")
  dom.innerText = "Document Object Model"
  const eventListeners = document.createElement("li")
  eventListeners.innerText = "Event Listeners"
  const forms = document.createElement("li")
  forms.innerText = "HTML Forms"
  const fetch = document.createElement("li")
  fetch.innerText = "Fetch"

  subList.append(dom, eventListeners, forms, fetch)

  return subList
}

for (topic of topics) {
  // create element
  const topicLi = document.createElement("li")

  // add content
  topicLi.innerHTML = `<span class="purple">${topic}</span>`

  if (topic === "Web APIs") {
    const subList = populateWebAPIContent()
    console.log(subList)
    topicLi.appendChild(subList)
  }

  // append to parent
  list.appendChild(topicLi)
}
