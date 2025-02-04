displayName("Danny", "Burrow")

/* 
    ? Scope
    * determines how information is accessible/available in different parts of the program

    Three levels of scope:
    * global
        * outermost scope
        * accessible everywhere after declaration (from every other scope)
            * within the same JS file (module) in node
            * window object
    * block 
        * within a code block
        * introduced with ES6, with let and const
    * function
        * within a function   
*/

// generally we avoid declaring variables in the global scope
const globalScopeVar = "this is the global scope"

// UNLESS we want a global constant
const HOURS_IN_A_DAY = 24
const MINUTES_IN_AN_HOUR = 60

function abc(param1) {
  const functionScopeVar = "this is in the function scope"
  console.log(param1)

  if (true) {
    const blockScopeVar = "this is block scoped"
    console.log(functionScopeVar)
    if (true) {
      const nestedBlockScopeVar = "this is in a nested code block"
      console.log(blockScopeVar)
      console.log(nestedBlockScopeVar)
      console.log(globalScopeVar)
      console.log(HOURS_IN_A_DAY)
    }
  }
  //   console.log(blockScopeVar) // ReferenceError: blockScopeVar is not defined
}
// console.log(functionScopeVar) // ReferenceError: functionScopeVar is not defined

thisArr = [1, 2, 3]

let total = 0 // this has to be declared outside the loop, or it will be reset every iteration
for (num of thisArr) {
  total += num
}
// console.log(total)

// abc("parameters are function scoped")

function outerFx() {
  let outerScopeVar = "this is the outer scope"

  function innerFx() {
    let innerScopeVar = "this is the inner scope"
    console.log(outerScopeVar)
    console.log(innerScopeVar)
  }

  innerFx()
}
// outerFx()

/* 
    ? HOISTING
    * the JS parsing engine reads top to bottom, left to right
    * the JS interpreter reads the code twice
    * first it looks for function declarations and vars and hoists them
        * it allocates memory space to those declarations
    * then it executes the code line by line
    * function expressions, lets and consts are not hoisted
    ! DO NOT RELY ON THIS
*/

// console.log(firstName) // ReferenceError: Cannot access 'firstName' before initialization
let firstName = "Danny"

// vars are hoisted, but only the declaration, not the assignment!
console.log(lastName) // undefined
var lastName = "Burrow"

function displayName(first, last) {
  console.log(first, last)
}

const sayHi = () => console.log("hi")
sayHi()

/* 
    ? let/const vs var
    * var is hoisted, let and const are not
    * let and const can be block scoped
    * var can only be function scoped or global
*/

const newFx = () => {
  if (1) {
    let letVar = 123
    var varVar = 321
    console.log(letVar)
  }
  console.log(varVar)
}

newFx()
