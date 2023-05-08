import React from 'react'
import styles from './Calculator.module.css'
import PropTypes from 'prop-types'

const Calculator = ({ children, theme }) => {
  return (
    <div className={`${styles.calculator} ${styles[`calculator--${theme}`]}`}>
      {children}
    </div>
  )
}

Calculator.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark'])
}

export default Calculator