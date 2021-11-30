import React from 'react'
import './WeeklyWeatherDetails.css'
import Icon from '../../elements/Icon/Icon'
import { IconType } from 'elements/Icon/types'
import { Forecast } from 'api/openWeather/types'

//TODO could use date-fns package
function formatDate(date: Date): string {
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

  let day = days[date.getDay()]
  let dayOfMonth = date.getDate()
  let month = months[date.getMonth()]
  let year = date.getFullYear()

  return `${day} ${dayOfMonth} ${month} ${year}`
}

type WeatherDetailsWeeklyProps = {
  icon: IconType
  description: string
  list: Forecast[]
  city: string
  country: string
}
export function WeatherDetailsWeekly({
  icon,
  description,
  list,
  city,
  country,
}: WeatherDetailsWeeklyProps): JSX.Element {
  console.log('weatherDetailsWeekly')
  return (
    <div className="weather-details-weekly-wrapper">
      {list.map((forecast) => (
        <div className="weather-box-weekly">
          <div className="weatherImgWrapper">
            <Icon type={icon} />
          </div>
          <div>
            <div className="temp">{Math.round(forecast.main.temp)}°c</div>
            {description && <div className="weather">{description}</div>}
            <div className="date">{formatDate(new Date())}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
