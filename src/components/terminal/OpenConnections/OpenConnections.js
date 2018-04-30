import React from 'react';
import styles from './OpenConnections.css';

const OpenConnections = () => {
  return <div className={styles.wrap}>
    <div className={styles.title}>Open connections</div>
    <div className={styles.connectionsWrap}>
      <div className={styles.connection}>
        <div className={styles.connectionIcon} />
        <div className={styles.connectionLabel}>VENUS</div>
      </div>
      <div className={`${styles.connection} ${styles.connected}`}>
        <div className={styles.connectionIcon} />
        <div className={styles.connectionLabel}>MARS</div>
      </div>
      <div className={styles.connection}>
        <div className={styles.connectionIcon} />
        <div className={styles.connectionLabel}>PLUTO</div>
      </div>
    </div>
  </div>;
};

export default OpenConnections;
