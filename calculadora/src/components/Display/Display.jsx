import React from 'react'
import styles from './Display.module.css'
import PropTypes from 'prop-types'

const Display = ( { value, theme } ) => {
  return (
    <div className={`${styles.screen} ${styles[`screen--${theme}`]}`}>
      {value}
    </div>
  )
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['light', 'dark'])
}

export default Display