console.log("hello!")

/* 
    ? Document Object Model (DOM)
    the document is a JS object containing 
        the structure and content of the html page
*/

console.log(document)

/* 
    ? Document / Window / Navigator / History
    * document -> outlines the html rendered
    * window -> handles browser-specific functions
    * navigator -> handles language and globalization / localization
    * history -> handles browser session history
*/

// console.log(window)
// console.log(navigator)
// setTimeout(() => history.back(), 2000)

// ! Create an element using the DOM

// 1. use document.createElement() to create element object
const header = document.createElement("h1")

// 2. give the element content
header.innerText = "Intro to the dom"
setTimeout(() => (header.innerText = "Intro to the DOM"), 2000)

// 3. append the element to its parent element
document.body.appendChild(header)

// ! Interact with elements that are already on the page
// before we can change an object, first we have to select it

/* 
    ? Query Selectors! 
    we can access elements in a BUNCH of ways
    * getElementById -> HTMLElement
    * getElementsByClassName -> HTMLCollection
        * array-like, it's an iterable list
        * does not have array methods
    * getElementsByTagName -> HTMLCollection
    * querySelector -> HTMLElement
    * querySelectorAll -> NodeList
*/

const first = document.getElementById("first")
const smiley = document.getElementById("smiley")
console.log(smiley)

smiley.style.color = "red"

document.body.appendChild(smiley)
document.body.appendChild(first)

// select by class
const items = document.getElementsByClassName("topic-item")
console.log(items)

// this works!
for (item of items) {
  console.log(item.innerText)
}

// this does not work (because an HTMLCollection is not an array)
// items.forEach((item) => console.log(item.innerText))

const lists = document.getElementsByTagName("ul")
lists[0].appendChild(smiley) // you need to get individual items out of the collection

const first2 = document.querySelector("#first")
console.log(first2)
const items2 = document.querySelectorAll(".topic-item")
console.log(items2)

document.get

// ! Add some bullets to the list

// select the parent
const list = document.getElementById("topic-list")

// create the new item
const js = document.createElement("li")
const dom = document.createElement("li")
// give new item content
js.innerText = "JavaScript"
dom.innerText = "DOM"
// append to parent
list.appendChild(js)
list.appendChild(dom)

// ! Change CSS Classes

js.classList = "topic-item"
js.classList = "fave"

js.classList.add("topic-list")
// js.classList.remove("fave")

console.log(js.classList)

// let's turn all of the li's purple
const listItems = document.getElementsByTagName("li")

for (item of listItems) {
  console.log(item)
  item.classList.add("purple")
}

for (item of listItems) {
  if (item.classList.contains("fave")) {
    item.style.textDecoration = "underline"
  }
}

const fave = document.querySelector(".fave")
fave.style.fontWeight = 900
console.log(fave)
