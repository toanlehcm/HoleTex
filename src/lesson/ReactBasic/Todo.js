import React from 'react'
import styles from './styles.module.scss'

export default function Todo({ todo, onCheckBtnClick }) {
  return (
    <div className={styles.todo_item}>
      <button id={todo.id} className={`${styles.button_item} ${todo.idCompleted && styles.text_decoration}`} onClick={onCheckBtnClick(todo.id)}>{todo.name}</button>

      <span className={styles.icon_check}>V</span>
    </div>

  )
}
