const API_KEY = "49e2f8d1d369b067a8685cf7f36ca881"

const getWeather = async (zipCode) => {
  // https://openweathermap.org/api/geocoding-api
  // TODO: make an additional call to the geocoding endpoint
  // to get the lat/lon coordinates for a given zip code
  // then pass those in to this fetch

  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  )
  const json = await res.json()
  console.log(json)
}

getWeather(zipCode)

// challenge 2:
// create an input on the page that takes a ZIP code
// when a user submits a ZIP code, call the getWeather function
// then display something from the results to the user
