import React from 'react';
import styles from './styles.module.scss'

function LessonHTMLAndCSS(props) {
  return (
    <div>
      {/* <div className={styles.flex_container} >
        <div className={`${styles.box} ${styles.box_1}`} ></div>
        <div className={`${styles.box} ${styles.box_2}`} ></div>
        <div className={`${styles.box} ${styles.box_3}`} ></div>
        <div className={`${styles.box} ${styles.box_1}`} ></div>
        <div className={`${styles.box} ${styles.box_2}`} ></div>
        <div className={`${styles.box} ${styles.box_3}`} ></div>
        <div className={`${styles.box} ${styles.box_1}`} ></div>
        <div className={`${styles.box} ${styles.box_2}`} ></div>
        <div className={`${styles.box} ${styles.box_3}`} ></div>
      </div> */}

      <div className={styles.flex_container_2}>
        <div className={styles.flex_item}>Item 1</div>
        <div className={styles.flex_item}>Item 2</div>
        <div className={styles.flex_item}>Item 3</div>
      </div>

      <div className={styles.inline_flex_container}>
        <div className={styles.flex_item}>Item 1</div>
        <div className={styles.flex_item}>Item 2</div>
        <div className={styles.flex_item}>Item 3</div>
      </div>

      <p>This is some text before the <span className={styles.inline_flex_container}>
        <div className={styles.flex_item}>Inline Item 1</div>
        <div className={styles.flex_item}>Inline Item 2</div>
        <div className={styles.flex_item}>Inline Item 3</div>
      </span> and this is some text after.</p>
    </div>
  );
}

export default LessonHTMLAndCSS;