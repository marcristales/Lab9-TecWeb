import React from 'react'
import styles from './Wrapper.module.css'
import PropTypes from 'prop-types'

const Wrapper = ({ children, theme }) => {
  return (
    <div className={`${styles.wrapper} ${styles[`wrapper--${theme}`]}`}>
      {children}
    </div>
  )
}

Wrapper.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark'])
}

export default Wrapper