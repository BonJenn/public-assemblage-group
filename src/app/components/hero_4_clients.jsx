import React from 'react';
import styles from '../styles/hero_4_clients.module.css';

const Hero4 = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.logoGrid}>
        <div className={styles.logoItem}>
          <img src="/path/to/logo1.png" alt="Client 1" />
        </div>
        <div className={styles.logoItem}>
          <img src="/path/to/logo2.png" alt="Client 2" />
        </div>
        <div className={styles.logoItem}>
          <img src="/path/to/logo3.png" alt="Client 3" />
        </div>
        {/* Add more logos as needed */}
      </div>
    </section>
  );
};

export default Hero4;
