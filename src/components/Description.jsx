
import React from 'react'
import styles from '../styles/Description.module.css'
import Image from 'next/image'
import sp from '../../public/sponsers.png'
import abc from '../../public/img.png'

const Description = () =>{
    return(
        <>
        <div className={styles.sponsers}>
            <Image 
                src={sp}
                width={1200}
                height={400}
                style={{
                maxWidth: '100%',
                height: 'auto',
        }}
        />
        </div>
        
        <div className={styles.main_div}>
        <div className={styles.img}>
            <Image
                 src={abc}
                width={350}
                height={350}
                style={{
                maxWidth: '100%',
                height: '100%',
                }}
            />
        </div>
            <div className={styles.head} >
                <h1>Apoorv, IIITk's<br></br>
                techno-cultural fest,</h1><br></br>
            </div>
            <div className={styles.body}>
                <p>
                    has been celebrating arts, heritage,music and lifestyle
                    since its inception in 2019, A myriad of events with
                    impressive and breathtaking performances has always
                    been the norm.<br></br>
                    It's the amalgamation of mind gruelling competitions,
                    thought proving expert talks and workshops that
                    stimulate your cerebral matter!<br></br><br></br>
                </p>
            </div>
            <button className={styles.button}>Register</button>
        </div> 
        </>
    );
}

export default Description