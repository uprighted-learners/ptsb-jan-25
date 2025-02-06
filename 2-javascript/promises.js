/*
    ? Promises
    * object that may produce a value in the future
    * three states:
        * Pending (unfinished)
        * Fulfilled (complete, with result)
        * Rejected (error)
    * allow code to execute without having to wait for its completion
*/

const synchronousFx = () => "no promises here"

const promiseHelper = (resolve, reject) => {
  if (Math.random() > 0.5) {
    setTimeout(() => {
      resolve("hello")
    }, 2000)
  } else {
    reject("fail")
  }
}

// this is a promise object
const newPromise = new Promise(promiseHelper)

// this might as well be a promise object, it's a function that returns a promise
const promiseFx = () => {
  return newPromise
}

// it's just a promise! it keeps being a promise until something makes the promise resolve (or reject)
console.log(promiseFx())

// in order to get the data out of a promise, we must resolve it
// one way is to use resolvers!

promiseFx()
  .then((resolution) => {
    console.log(39, "this was a success!")
    return `the result is: ${resolution}`
  })
  .then((newArg) => console.log(42, newArg))
  .catch((rejection) => console.log(43, rejection))
  .finally(() => console.log("this happens regardless"))

// this is going to log first, because it fires immediately
// before the above promise has time to finish resolving
// promises take time, even if they're very fast
console.log(49, synchronousFx())

/* 
    ? Asynchronous Functions
    * introduced after ES6 (ES2017?)
    * alternative to writing explicit Promise objects
    * a function that returns a promise 
    
    Syntax: 
    * async function myFx() {}
    * const myFx = async function() {}
    * const myFx = async () => {}
     
    The async keyword automatically turns the return value into a Promise
*/

const asyncFx = async () => {
  return "Hello World"
}

console.log(69, asyncFx())

asyncFx().then((res) => console.log(res))

// or use await!

/* 
    ? Await keyword
    * can ONLY be used inside of async functions
    * tells JS to wait on a promise before moving on
*/

const start = async () => {
  // use await to get the values out of async functions
  // under the hood, this is resolving the promise
  const result = await asyncFx()
  // but we can only that value within this function
  // because we can't return it out as a value, only as a promise
  console.log(87, result)
  return "this is also going to be a promise"
}

start()
console.log(92, start())

async function declaration() {
  return "whatever"
}

const expression = async function () {
  return "thing"
}
