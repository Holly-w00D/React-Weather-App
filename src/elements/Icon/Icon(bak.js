import React from 'react'
import { ReactComponent as ClearIcon } from '../../assets/images/Clear.svg'
import { ReactComponent as MoonIcon } from '../../assets/images/Moon.svg'
import { ReactComponent as SunIcon } from '../../assets/images/Sun.svg'
import { ReactComponent as DefaultIcon } from '../../assets/images/Preview.svg'
import { ReactComponent as SunshineIcon } from '../../assets/images/Sunshine.svg'
import { ReactComponent as RainyIcon } from '../../assets/images/Rain.svg'
import { ReactComponent as NightIcon } from '../../assets/images/Night.svg'
import { ReactComponent as NightRainyIcon } from '../../assets/images/Night-rainy.svg'
import { ReactComponent as CloudWindIcon } from '../../assets/images/Cloud-wind.svg'

const iconTypes = {
  Clear: ClearIcon,
  Moon: MoonIcon,
  Sun: SunIcon,
  Default: DefaultIcon,
  Sunshine: SunshineIcon,
  Rainy: RainyIcon,
  Night: NightIcon,
  NightRainy: NightRainyIcon,
  CloudWind: CloudWindIcon,
}

const Icon = ({ name, ...props }) => {
  let Icon = iconTypes[name]
  return <Icon {...props} />
}

export default Icon
