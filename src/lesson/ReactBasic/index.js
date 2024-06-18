import React, { useState } from 'react';
import TodoList from './TodoList';
import styles from './styles.module.scss'

function ReactBasic(props) {
  const [arrTodoList, setArrTodoList] = useState(['item1', 'item2', 'item3'])
  const [isDisabled, setIsDisabled] = useState(true)
  const [inputValue, setInputValue] = useState('');

  // Event handler to update input value state
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    // Enable button if input value is not empty
    setIsDisabled(event.target.value === '');
  };

  // Function to handle adding a new todo item
  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setArrTodoList([...arrTodoList, inputValue.trim()]);
      setInputValue(''); // Clear input field after adding todo
      setIsDisabled(true); // Disable button after adding todo
    }
  }

  return (
    <div >
      <h3> Danh sách cần làm</h3>

      <input name='add-todo' placeholder='Thêm việc cần làm...' value={inputValue} onChange={handleInputChange} />

      <button className={styles.button_add} disabled={isDisabled} onClick={handleAddTodo}>Thêm</button>

      <TodoList arrTodoList={arrTodoList} />
    </div>
  );
}

export default ReactBasic;