import React from 'react';
import styles from './styles.module.scss'

function LessonCSSGrid(props) {
  return (
    <div>
      <div className={styles.container} >
        <div className={`${styles.item} ${styles.item_1}`} >item_1</div>
        <div className={`${styles.item} ${styles.item_2}`} >item_2</div>
        <div className={`${styles.item} ${styles.item_3}`} >item_3</div>
        {/* <div className={`${styles.item} ${styles.item_4}`} >item_4</div> */}
        <div className={`${styles.item} ${styles.item_5}`} >item_5</div>
      </div>
    </div>
  );
}

export default LessonCSSGrid;