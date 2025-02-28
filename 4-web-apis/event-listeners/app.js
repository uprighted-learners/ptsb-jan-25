/* 
    ? Event Listeners
    * listens for input from users
        * inherently async, event can happen any time
    * always listen for one single type of event
    * can listen for any kind of event
        * clicks
        * key strokes
        * specific chars or chords
        * mouse hover events
        * input changes
        * https://www.w3schools.com/jsref/dom_obj_event.asp
    * always attached to a specific element
    * take a callback, the callback runs when the event happens
*/

const box = document.getElementById("box")
const button = document.getElementById("red")
const opacityButton = document.getElementById("opacity")

// button.addEventListener("mouseleave", () => {
//   console.log("turn red")
//   console.log("!")
// })

// button.addEventListener("dblclick", () => {
//   console.log("double click")
// })

// ! Goal: Turn the box red when the button is clicked

button.addEventListener("click", (event) => {
  console.log(event)
  box.classList.toggle("red-box")

  // if (box.classList.contains("red-box")) {
  //   box.classList.remove("red-box")
  //   // box.style.backgroundColor = "unset"
  // } else {
  //   box.classList.add("red-box")
  //   // box.style.backgroundColor = "red"
  // }
})

opacityButton.addEventListener("click", () => {
  box.classList.toggle("see-through")
})
