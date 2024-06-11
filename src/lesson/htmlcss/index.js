import React from 'react';
import styles from './styles.module.scss'

function LessonHTMLAndCSS(props) {
  return (
    <div>
      <div className={styles.flex_container} >
        <div className={`${styles.box} ${styles.box_1}`} ></div>
        <div className={`${styles.box} ${styles.box_2}`} ></div>
        <div className={`${styles.box} ${styles.box_3}`} ></div>
      </div>
    </div>
  );
}

export default LessonHTMLAndCSS;