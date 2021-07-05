import React from 'react'

import classes from './Icon.module.css'

const icon = (props) => {
  return (
    <img
      src={require(`../../assets/images/${props.icon}.svg`).default}
      alt={props.type}
      className={classes.Icon}
    />
  )
}

export default icon
