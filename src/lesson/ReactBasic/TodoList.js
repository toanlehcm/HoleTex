import React, { useCallback, useState } from 'react';
import Todo from './Todo';
import styles from './styles.module.scss'

function TodoList({ arrTodoList }) {

  return (
    <div className={styles.todo_list}>
      TodoList

      {arrTodoList.map((todo, index) => {
        return <Todo todo={todo} />
      })}
    </div>
  );
}

export default TodoList;

