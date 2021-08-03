import React from 'react'
import './WeeklyWeatherDetails.css'
import Icon from '../../elements/Icon/Icon'

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
const weatherDetailsWeekly = (props) => {
  return (
    <div className="weather-details-weekly-wrapper">
      <div className="weather-box-weekly">
        <div className="weatherImgWrapper">{Icon(props.data.icon)}</div>
        {typeof props.data.description &&
        props.data.temperature &&
        props.data.city &&
        props.data.country !== 'undefined' ? (
          <div>
            <div className="temp">{Math.round(props.data.temperature)}°c</div>
            <div className="weather">{props.data.description}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="weather-box-weekly" container direction="row">
        <div className="weatherImgWrapper">{Icon(props.data.icon)}</div>
        {typeof props.data.description &&
        props.data.temperature &&
        props.data.city &&
        props.data.country !== 'undefined' ? (
          <div>
            <div className="temp">{Math.round(props.data.temperature)}°c</div>
            <div className="weather">{props.data.description}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="weather-box-weekly" container direction="row">
        <div className="weatherImgWrapper">{Icon(props.data.icon)}</div>
        {typeof props.data.description &&
        props.data.temperature &&
        props.data.city &&
        props.data.country !== 'undefined' ? (
          <div>
            <div className="temp">{Math.round(props.data.temperature)}°c</div>
            <div className="weather">{props.data.description}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="weather-box-weekly" container direction="row">
        <div className="weatherImgWrapper">{Icon(props.data.icon)}</div>
        {typeof props.data.description &&
        props.data.temperature &&
        props.data.city &&
        props.data.country !== 'undefined' ? (
          <div>
            <div className="temp">{Math.round(props.data.temperature)}°c</div>
            <div className="weather">{props.data.description}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="weather-box-weekly" container direction="row">
        <div className="weatherImgWrapper">{Icon(props.data.icon)}</div>
        {typeof props.data.description &&
        props.data.temperature &&
        props.data.city &&
        props.data.country !== 'undefined' ? (
          <div>
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

export default weatherDetailsWeekly
