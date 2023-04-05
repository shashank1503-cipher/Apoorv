import React from 'react'
import styles from '../styles/TrapAndDj.module.css'
import Image from 'next/image'
import trap from '../assets/band/trap.svg'
import dj from '../assets/band/dhruv.svg'
import trapPhoto from '../assets/band/trap_photo.svg'
import djPhoto from '../assets/band/dj_photo.svg'
const TrapAndDj = () => {
  return (
    <div
        className={styles.cont}
    >
        <div
            className={styles.container}
        >
            <div className={styles.imageContainer}>
                
            </div>

            <div className={styles.mainContainer}>

                <div className={styles.leftContainer}>
                    <div className={styles.welcomeContent}>
                        <div className={styles.welcomeContentHeader}>
                        Feel the rhythm <br/>of your heart’s music.
                        </div>
                        <div className={styles.welcomeContentSlang}>
                        A once in a lifetime event. This is one concert, <span>

    you don’t want to miss.
                        </span>
                        </div>

                        <div className={styles.line}></div>
                    </div>

                    <div className={styles.logos}>
                        <div className={styles.logo}>
                            <Image src={trap} fill/>
                        </div>
                        <div className={styles.logo}>
                            <Image src={dj} fill/>
                        </div>
                    </div>
                </div>

                <div className={styles.singerImage}>

                </div>

            </div>
            
        </div>

        <div className={styles.trap}>
            <div className={styles.Header}>

                APRIL 8TH -- 8:00 PM

                <span className={`${styles.time_line} ${styles.trap_color}`}></span>
            </div>

            <div className={`${styles.main} ${styles.trap_main_color}`}>

                <div className={styles.trap_desc}>
                    <div className={styles.trap_desc_header}>
                        T.R.A.P
                    </div>

                    <p className={styles.trap_desc_1}>
                    Get ready to experience the ultimate adrenaline rush at our electrifying concert featuring the
sensational music band, T.R.A.P!
                    </p>
                    <p className={styles.trap_desc_1}>
                    Brace yourself for a night of high-energy beats, heart-pumping
 melodies, and mind-blowing performances that will have you breaking the dance floor.
                    </p>
                </div>
                
                <div className={styles.trap_photo}>
                    <Image src={trapPhoto} fill/>
                </div>
            </div>
        </div>

        <div className={styles.divider}></div>


        <div className={styles.dj}>

            <div className={styles.Header}>

            <span className={`${styles.time_line} ${styles.dj_color}`}></span>
             
             APRIL 7TH -- 8:00 PM

            </div>

            <div className={`${styles.main} ${styles.dj_main_color}`}>

                <div className={styles.trap_desc}>
                    <div className={styles.trap_desc_header}>
                        DJ Dhruv
                    </div>

                    <p className={styles.trap_desc_1}>
                    After a brainstorming day of tech events, we will get you tuned for the Splendid Dj night with DJ Dhruv on the Pod , making sure that no feet remains calm.

                    </p>
                    <p className={styles.trap_desc_1}>
                    Join us for the event as we bring you the best of its kind
                    </p>
                </div>

                <div className={styles.trap_photo}>
                    <Image src={djPhoto} fill/>
                </div>
            </div>


        </div>

    </div>
  )
}

export default TrapAndDj