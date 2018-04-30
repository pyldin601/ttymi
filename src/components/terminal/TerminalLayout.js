import React from 'react';
import styles from './TerminalLayout.css';

const TerminalLayout = ({ sidebar, body }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.sidebar}>Sidebar</div>
      <div className={styles.body}>Body</div>
    </div>
  );
};

export default TerminalLayout;
