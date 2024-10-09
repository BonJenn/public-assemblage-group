import React from 'react';
import styles from '../styles/hero_1_main.module.css';

const HeroMain = () => {
  return (
    <section className={styles.hero}>
        <div className={styles.contentTop}>
            <div className={styles.contentTopText}>
                <h1>Experts in Safety Compliance</h1>
                <p>
                Your path to stress-free, safe, and compliant events starts here. We specialize in helping event-planners navigate the complexities of fire-safety inspections, ensuring smooth, worry-free, approvals for your event.
                </p>
                <div className={styles.buttons}>
                <button className={styles.primaryButton}>Get Expert Help</button>
                <button className={styles.secondaryButton}>Learn More</button>
                </div>
           
            </div>

            <div className={styles.imagePlaceholder}>
                    {/* Placeholder for the image */}
                </div>

        
        </div>

        <div className={styles.contentBottom}>
            <div className={styles.trackRecord}>
                <div>
                <h2>250+</h2>
                <p>Successful Events</p>
                </div>
                <div>
                <h2>340</h2>
                <p>Inspection Approvals</p>
                </div>
                <div>
                <h2>300+</h2>
                <p>Safety Standards Met</p>
                </div>
                <div>
                <h2>2.4M</h2>
                <p>Attendees Served</p>
                </div>
            </div>
        </div>






     


      
    
    </section>
  );
};

export default HeroMain;
