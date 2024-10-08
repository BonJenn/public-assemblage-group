import React from 'react';
import styles from '../styles/hero_3_about.module.css';

const Hero3 = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h2>Know Our Story</h2>
        <p>
          Founded by John Benn, a seasoned fire safety inspector with 30 years of experience with the Los Angeles Fire Department, Public Assemblage Group brings unmatched expertise to event safety consulting.
        </p>
        <p>
          Our mission is to ensure that event planners not only meet but exceed safety regulations. With a deep understanding of fire safety codes and the complexities of inspection processes, we provide peace of mind for event organizers. From large festivals to intimate gatherings, we are your trusted partner in navigating safety compliance with ease.
        </p>
        <button className={styles.learnMoreButton}>Learn More</button>
      </div>
      <div className={styles.imageContainer}>
        {/* Placeholder for the image */}
      </div>
    </section>
  );
};

export default Hero3;
