import React from 'react'
import styles from './Keyboard.module.css'

const Keyboard = ({ children }) => {
  return (
    <div className={styles.keyboard}>
      {children}
    </div>
  )
}

export default Keyboard