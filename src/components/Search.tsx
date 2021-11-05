import { useStore } from 'effector-react'
import {
  $isFullTime,
  $location,
  $term,
  setLocation,
  setTerm,
  toggleIsFullTime,
  searchFx,
} from 'models/search'

export default function Search() {
  const isFullTime = useStore($isFullTime)
  const location = useStore($location)
  const term = useStore($term)

  return (
    <div className="">
      <input
        type="text"
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Term"
        value={term}
      />
      <input
        type="text"
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        value={location}
      />
      <span>
        Full Time
        <input
          type="checkbox"
          onChange={() => toggleIsFullTime(!isFullTime)}
          checked={isFullTime}
        />
        <button onClick={() => searchFx()}>Search</button>
      </span>
    </div>
  )
}
