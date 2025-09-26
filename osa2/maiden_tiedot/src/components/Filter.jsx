const Filter = ({ value, onChange }) => (
  <div>
    find a country: <input
      value={value}
      onChange={onChange}
      placeholder="Type a country name..."
    />
  </div>
)

export default Filter