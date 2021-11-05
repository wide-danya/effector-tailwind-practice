export default function Search() {
  const term = 'term'
  const location = 'location'
  const fullTime = 'fullTime'

  return (
    <div className="">
      <input
        type="text"
        // onChange={onChangeTerm}
        placeholder="Term"
        value={term}
      />
      <input
        type="text"
        // onChange={onChangeLocation}
        placeholder="Location"
        value={location}
      />
      <span>
        Full Time
        <input
          type="checkbox"
          //   onChange={onChangeFulltime}
          value={fullTime}
        />
        <button
        // onClick={onClickSearch}
        >
          Search
        </button>
      </span>
    </div>
  )
}
