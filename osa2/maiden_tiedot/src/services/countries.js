import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getCountry = (name) => axios.get(`${baseUrl}/${name}`).then(res => res.data)

const getAll = () => axios.get(`${baseUrl}/all`).then(res => res.data)

export default { getAll, getCountry }