import React from 'react';
import styles from './styles.module.scss'

function LessonPositionCSS(props) {
  return (
    <div>
      <div className={styles.container} >
        <div className={`${styles.item} ${styles.item_1}`} >block_1</div>
        <div className={`${styles.item} ${styles.item_2}`} >block_2</div>
        <div className={`${styles.item} ${styles.item_3}`} >block_3</div>

      </div>
    </div>
  );
}

export default LessonPositionCSS;