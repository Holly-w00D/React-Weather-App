import React from 'react'

import classes from './SearchBar.module.css'

// function SearchBar() {
//   const api = {
//     key: 'a9f3aeedf7e9d4a5bccfab2f3dc2e3e2',
//     base: 'https://api.openweathermap.org/data/2.5/',
//   }

//   const [query, setQuery] = useState('')
//   const [weather, setWeather] = useState({})

//   const search = (evt) => {
//     if (evt.key === 'Enter') {
//       fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//         .then((res) => res.json())
//         .then((result) => {
//           setWeather(result)
//           setQuery('')
//           console.log(result)
//         })
//     }
//   }

const searchBar = (props) => {
  return (
    <div className={classes.SearchBarWrapper}>
      <input
        type="text"
        placeholder="Search..."
        name="city"
        value={props.value}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
        // onChange={(e) => setQuery(e.target.value)}
        // value={query}
        // onKeyPress={search}
      />
    </div>
  )
}

export default searchBar
