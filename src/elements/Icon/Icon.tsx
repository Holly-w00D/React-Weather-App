import React from 'react'
import ClearDay from './icons/ClearDay'
import ClearNight from './icons/ClearNight'
import Cloudy from './icons/Cloudy'
import Fog from './icons/Fog'
import MostlyCloudyDay from './icons/MostlyCloudyDay'
import PartlyCloudyDay from './icons/PartlyCloudyDay'
import PartlyCloudyNight from './icons/PartlyCloudyNight'
import Rain from './icons/Rain'
// import Sleet from './icons/Sleet'
import Snow from './icons/Snow'
import { IconType } from './types'
// import Wind from './icons/Wind'

type IconProps = {
  type: IconType
}
const Icon = ({ type }: IconProps): JSX.Element => {
  switch (type) {
    case '10d':
      return <ClearDay />

    case '01n':
      return <ClearNight />

    case '02d':
      return <PartlyCloudyDay />

    case '02n':
      return <PartlyCloudyNight />

    case '03d':
      return <MostlyCloudyDay />

    case '03n':
      return <PartlyCloudyNight />

    case '04d':
      return <Cloudy />

    case '04n':
      return <Cloudy />

    case '10d':
      return <Rain />

    case '10n':
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
      return <div />
  }
}

export default Icon
