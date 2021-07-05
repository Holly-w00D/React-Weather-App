import React from 'react'
import ClearDay from './icons/ClearDay'
import ClearNight from './icons/ClearNight'
import Cloudy from './icons/Cloudy'
import Fog from './icons/Fog'
import PartlyCloudyDay from './icons/PartlyCloudyDay'
import PartlyCloudyNight from './icons/PartlyCloudyNight'
import Rain from './icons/Rain'
// import Sleet from './icons/Sleet'
import Snow from './icons/Snow'
// import Wind from './icons/Wind'

const Icon = (iconName) => {
  switch (iconName) {
    case '10d':
      return <ClearDay />

    case '01n':
      return <ClearNight />

    case '03d':
      return <PartlyCloudyDay />

    case '03n':
      return <PartlyCloudyNight />

    case '04d':
      return <Cloudy />

    case '10d':
      return <Rain />

    // case 'sleet':
    //   return <Sleet />

    case '13d':
      return <Snow />

    // case 'wind':
    //   return <Wind />

    case '50d':
      return <Fog />

    default:
      return <div></div>
  }
}

export default Icon
