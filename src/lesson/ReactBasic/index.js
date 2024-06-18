import React, { useCallback, useMemo, useState } from 'react';
import TodoList from './TodoList';
import styles from './styles.module.scss'
import { v4 } from 'uuid'

const DEFAULT_LIST = [
  {
    id: v4(),
    name: 'item1',
    idCompleted: false
  },
  {
    id: v4(),
    name: 'item2',
    idCompleted: false
  },
  {
    id: v4(),
    name: 'item3',
    idCompleted: false
  },
]

function ReactBasic(props) {
  const [arrTodoList, setArrTodoList] = useState(DEFAULT_LIST)
  const [isDisabled, setIsDisabled] = useState(true)
  const [inputValue, setInputValue] = useState('');

  // Event handler to update input value state
  const handleInputChange = useCallback((event) => {
    setInputValue(event.target.value);
    // Enable button if input value is not empty
    setIsDisabled(event.target.value === '');
  }, []);

  // Function to handle adding a new todo item
  const handleAddTodo = useCallback(() => {
    if (inputValue.trim() !== '') {
      setArrTodoList([{ id: v4(), name: inputValue.trim(), idCompleted: false }, ...arrTodoList]);
      setInputValue(''); // Clear input field after adding todo
      setIsDisabled(true); // Disable button after adding todo
    }
  }, [inputValue, arrTodoList])

  const onCheckBtnClick = useCallback((id) => {
    setArrTodoList((prevState) => prevState.map((todo) => todo.id === id ? { ...todo, idCompleted: true } : todo))
  }, [])

  return (
    <div >
      <h3> Danh sách cần làm</h3>

      <input name='add-todo' placeholder='Thêm việc cần làm...' value={inputValue} onChange={handleInputChange} />

      <button className={styles.button_add} disabled={isDisabled} onClick={handleAddTodo}>Thêm</button>

      <TodoList arrTodoList={arrTodoList} onCheckBtnClick={onCheckBtnClick} />
    </div>
  );
}

export default ReactBasic;