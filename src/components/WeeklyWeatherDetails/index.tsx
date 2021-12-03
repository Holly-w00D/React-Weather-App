import React from 'react'
import './WeeklyWeatherDetails.css'
import Icon from '../../elements/Icon/Icon'
import { IconType } from 'elements/Icon/types'
import { Forecast } from 'api/openWeather/types'
import moment from 'moment'

// var moment = require('moment');

//TODO could use date-fns package
// const WeekdayCard = ({ reading }) => {
// let newDate = new Date()
// const weekday =  * 1000
// newDate.setTime(weekday)

type WeatherDetailsWeeklyProps = {
  icon: IconType
  description: string
  dailyData: Forecast[]
  city: string
  country: string
}
export function WeatherDetailsWeekly({
  icon,
  description,
  dailyData,
  city,
  country,
}: WeatherDetailsWeeklyProps): JSX.Element {
  console.log('weatherDetailsWeekly')

  return (
    <div className="weather-details-weekly-wrapper">
      {dailyData.map((forecast, index) => (
        <div className="weather-box-weekly" key={index}>
          {/* <div className="weatherImgWrapper">{Icon(icon)}</div> */}
          {/* {forecastdescription &&
          forecast.data.temperature &&
          forecast.data.city &&
          forecast.data.country && ( */}
          <>
            <div>
              <div className="location">
                {moment(forecast.dt * 1000).format('dddd')}
              </div>
              <Icon type={forecast.weather[0].icon} />
            </div>
            <div>
              <div className="temp">{Math.round(forecast.main.temp)}°c</div>
              {description && (
                <div className="weather">{forecast.weather[0].description}</div>
              )}
              <div className="date">
                {moment(forecast.dt * 1000).format('MMMM Do, h:mm a')}
              </div>
            </div>
          </>
        </div>
      ))}
    </div>
  )
}
