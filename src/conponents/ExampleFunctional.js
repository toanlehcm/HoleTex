import React, { useState } from 'react';
import styles from './exampleFunctional.module.scss'

function ExampleFunctional(props) {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prevState) => {
      console.log('prevState ', prevState);
      return prevState + 1
    })

    setCount((prevState) => {
      console.log('prevState *', prevState);
      return prevState + 1
    })
  }

  return (
    <div>
      <div>count {count}</div>
      <button onClick={handleClick}> click me</button>

      <div className={styles.flex_container} >
        <div className={`${styles.box} ${styles.box_1}`} ></div>
        <div className={`${styles.box} ${styles.box_2}`} ></div>
        <div className={`${styles.box} ${styles.box_3}`} ></div>
      </div>
    </div>
  );
}

export default ExampleFunctional;