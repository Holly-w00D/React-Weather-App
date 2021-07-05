import React from 'react'
import Icon from '../../elements/Icon/Icon'

// import classes from './WeatherDetails.module.css'
import './WeatherDetails.css'
// import classes from './Icon.module.css'

// const api = {
//   key: 'a9f3aeedf7e9d4a5bccfab2f3dc2e3e2',
//   base: 'https://api.openweathermap.org/data/2.5/',
// }

// const [query, setQuery] = useState('')
// const [weather, setWeather] = useState({})

// const search = (evt) => {
//   if (evt.key === 'Enter') {
//     fetch(`${api.base}weather?q=${query}&units=metric&APPIDD=${api.key}`)
//       .then((res) => res.json())
//       .then((result) => setWeather(result))
//   }
// }

// const weatherType = 'Rainy'

const dateBuilder = (d) => {
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  let day = days[d.getDay()]
  let date = d.getDate()
  let month = months[d.getMonth()]
  let year = d.getFullYear()

  return `${day} ${date} ${month} ${year}`
}
const weatherDetails = (props) => {
  return (
    <div className="Header" style={{ backgroundColor: props.color }}>
      <div className="weather-box" style={{ backgroundColor: props.color }}>
        <div className="weatherImgWrapper">
          {/* <Icon name={weatherType} className={classes.Icon} /> */}
          {/* <Icon type={props.data.description} icon={props.data.icon} /> */}

          {Icon(props.data.icon)}

          {/* <img
            src="../../assets/images/Preview.svg"
            alt="Rainy Icon"
            className={classes.Icon}
          ></img> */}
        </div>
        {typeof props.data.description &&
        props.data.temperature &&
        props.data.city &&
        props.data.country !== 'undefined' ? (
          <div>
            <div className="location">
              {props.data.city}, {props.data.country}
            </div>
            <div className="temp">{Math.round(props.data.temperature)}°c</div>
            <div className="weather">{props.data.description}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default weatherDetails
