class CarState {
  constructor(status, nextStates, message, successRate) {
    this.status = status
    this.nextStates = nextStates
    this.message = message
    this.successRate = successRate
  }
}

const park = new CarState(
  "park",
  ["neutral", "drive", "reverse"],
  "The car is parked",
  1
)
const neutral = new CarState(
  "neutral",
  ["park", "drive", "reverse"],
  "The car is in neutral",
  1
)
const drive = new CarState(
  "drive",
  ["park", "neutral", "brakingMode", "cruiseControl"],
  "You're driving!",
  0.99
)
const reverse = new CarState(
  "reverse",
  ["park", "neutral"],
  "You're backing up",
  0.95
)
const brakingMode = new CarState(
  "brakingMode",
  ["drive", "neutral"],
  "Regenerative braking is on",
  0.85
)
const cruiseControl = new CarState(
  "cruiseControl",
  ["drive", "neutral"],
  "You're cruising :) ",
  0.1
)

/* 
    ? Three components of a state machine
    * state variable
    * object of possible states (lookup table)
    * function that enforces state change rules
*/

// 1. state variable
let currentState = park

// 2. lookup table
const stateLookup = {
  park: park, // instance of class CarState
  drive: [1, 2, 3],
  neutral,
  reverse,
  brakingMode,
  cruiseControl,
}

// 3. function to change state
const driveCar = (nextState) => {
  // if nextState is possible option
  // then update state
  // else print a warning

  const options = stateLookup[currentState.status].nextStates

  if (options.includes(nextState.status)) {
    if (Math.random() > nextState.successRate) {
      console.error("oh nooooooo!")
      return
    }

    currentState = nextState
    console.log(stateLookup[currentState.status].message)
  } else {
    console.log(
      `Cannot shift from ${currentState.status} to ${nextState.status}`
    )
  }
}

driveCar(drive)
driveCar(cruiseControl)
driveCar(reverse)
driveCar(brakingMode)
driveCar(neutral)
driveCar(park)
