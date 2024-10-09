import React from 'react';
import styles from '../styles/hero_2_offer.module.css';

const Hero2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>Events We Serve</div>
            <div className={styles.subheader}>
                We ensure your events are compliant and safe from start to finish.
            </div>
            <div className={styles.offerGrid}>
                <div className={styles.offerItem}>
                    <div className={styles.imagePlaceholder}></div>
                    <div className={styles.textContainer}>
                        <div className={styles.title}>Festivals and Concerts</div>
                        <div className={styles.description}>
                            Comprehensive safety solutions for large gatherings.
                        </div>
                    </div>
                </div>
                <div className={styles.offerItem}>
                    <div className={styles.imagePlaceholder}></div>
                    <div className={styles.textContainer}>
                        <div className={styles.title}>Film Shoots</div>
                        <div className={styles.description}>
                            Ensuring safety compliance on set for smooth operations.
                        </div>
                    </div>
                </div>
                <div className={styles.offerItem}>
                    <div className={styles.imagePlaceholder}></div>
                    <div className={styles.textContainer}>
                        <div className={styles.title}>Sporting Events</div>
                        <div className={styles.description}>
                            Keeping athletes and spectators safe with top-notch protocols.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero2;
