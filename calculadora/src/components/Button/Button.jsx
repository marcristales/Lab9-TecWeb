import React from 'react'
import styles from './Button.module.css'
import PropTypes from 'prop-types'

const Button = ({ type, value, onClick, theme }) => {
  return (
    <button className={`${styles.button} ${styles[`button--${theme}`]} ${styles[`button--${type}--${theme}`]}`} onClick={onClick}>
      {value}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(['light', 'dark'])
}

export default Button