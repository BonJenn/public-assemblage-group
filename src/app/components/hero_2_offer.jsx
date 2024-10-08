import React from 'react';
import styles from '../styles/hero_2_offer.module.css';

const Hero2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>What We Can Offer You</div>
            <div className={styles.subheader}>
                We make sure your event passes fire safety inspections and stays compliant from start to finish.
            </div>
            <div className={styles.offerGrid}>
                <div className={styles.offerItem}>
                    <div className={styles.icon}>🔄</div>
                    <div className={styles.title}>Method Development</div>
                    <div className={styles.description}>
                        Tailored safety solutions to meet all fire safety regulations.
                    </div>
                </div>
                <div className={styles.offerItem}>
                    <div className={styles.icon}>✔️</div>
                    <div className={styles.title}>Quality Assurance</div>
                    <div className={styles.description}>
                        Ensuring every event meets the highest standards of safety.
                    </div>
                </div>
                <div className={styles.offerItem}>
                    <div className={styles.icon}>👥</div>
                    <div className={styles.title}>Human Resources</div>
                    <div className={styles.description}>
                        Training your team to follow key safety protocols.
                    </div>
                </div>
                <div className={styles.offerItem}>
                    <div className={styles.icon}>🔍</div>
                    <div className={styles.title}>Policy Compliance</div>
                    <div className={styles.description}>
                        Seamless adherence to fire safety policies, so inspections are a breeze.
                    </div>
                </div>
                <div className={styles.offerItem}>
                    <div className={styles.icon}>📊</div>
                    <div className={styles.title}>Business Strategies</div>
                    <div className={styles.description}>
                        Proactive safety strategies that elevate event quality and compliance.
                    </div>
                </div>
                <div className={styles.offerItem}>
                    <div className={styles.icon}>⚙️</div>
                    <div className={styles.title}>Management System</div>
                    <div className={styles.description}>
                        Tools and support to manage safety procedures efficiently and effectively.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero2;
