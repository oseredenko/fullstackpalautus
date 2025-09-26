import Country from "./Country.jsx"

const Countries = ({ countries, onShowCountry }) => {
  if (countries.length === 0) return null
  if (countries.length > 10) return <div>too many matches</div>
  if (countries.length === 1) return <Country country={countries[0]} />

  return (
    <ul>
      {countries.map(c => (
        <li key={c.name.common}>
          {c.name.common} <button onClick={() => onShowCountry(c)}>show</button>
        </li>
      ))}
    </ul>
  )
}

export default Countries