import React from 'react';
import styles from './Error.css';

const Error = ({ reason }) => (
  <div className={styles['error-wrap']}>
    <div className={styles['error-row']}>
      <div className={styles['error-title']}>Error</div>
      <div className={styles['error-reason']}>{ reason }</div>
    </div>
  </div>
);

export default Error;
