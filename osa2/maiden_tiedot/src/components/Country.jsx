import { useEffect, useState } from "react"
import weatherService from "../services/weather.js"

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    if (country.capital && country.capital.length > 0) {
      const city = country.capital[0]
      weatherService.getWeather(city)
        .then(data => setWeather(data))
        .catch(err => console.error(err))
    }
  }, [country])

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital ? country.capital[0] : "N/A"}</p>
      <p>Area: {country.area} km²</p>

      <h3>Languages:</h3>
      <ul>
        {country.languages
          ? Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)
          : <li>N/A</li>}
      </ul>

      {country.flags && <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="150" />}

      {weather && (
        <div>
          <h3>Weather in {country.capital[0]}</h3>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Wind: {weather.wind.speed} m/s</p>
          {weather.weather[0] && (
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default Country