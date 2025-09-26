import { useState, useEffect } from "react"
import countriesService from "./services/countries.js"
import Filter from "./components/Filter.jsx"
import Countries from "./components/Countries.jsx"
import Country from "./components/Country.jsx"

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    countriesService.getAll().then(data => setCountries(data))
  }, [])

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    setSelectedCountry(null)
  }

  const filtered = search
    ? countries.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
    : []

  const handleShowCountry = (country) => setSelectedCountry(country)

  return (
    <div className="app-container">
      <Filter value={search} onChange={handleSearchChange} />
      {selectedCountry
        ? <Country country={selectedCountry} />
        : <Countries countries={filtered} onShowCountry={handleShowCountry} />}
    </div>
  )
}

export default App
