const thisArray = [1, 2, 3]

const thisObject = {
  key: "value",
  key2: "value2",
  key3: thisArray,
  key4: thisArray,
  key5: thisArray,
}

console.log(thisObject.key4)
