import React from 'react'
import styles from './styles.module.scss'

export default function Todo({ todo }) {
  return (
    <button className={styles.button_item}>
      {todo}
    </button>
  )
}
