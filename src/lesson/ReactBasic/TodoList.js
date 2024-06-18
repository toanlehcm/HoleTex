import React from 'react';
import Todo from './Todo';
import styles from './styles.module.scss'

function TodoList({ arrTodoList, onCheckBtnClick }) {
  return (
    <div className={styles.todo_list}>
      TodoList

      {arrTodoList.map((todo, index) => {
        return <Todo key={todo.id} todo={todo} onCheckBtnClick={onCheckBtnClick} />
      })}
    </div>
  );
}

export default TodoList;

