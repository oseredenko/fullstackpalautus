import axios from 'axios'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

const getWeather = (city) =>
  axios
    .get(`${baseUrl}?q=${city}&units=metric&appid=${import.meta.env.VITE_SOME_KEY}`)
    .then(res => res.data)

export default { getWeather }