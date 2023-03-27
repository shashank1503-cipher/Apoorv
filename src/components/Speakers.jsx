import React, { useState } from 'react'
import styles from '../styles/Speakers.module.css'
import SpeakerCard from './SpeakerCard'
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
// import img2 from "../components/Images/sampleImg.jpg";
import { motion } from 'framer-motion'
import speakersList from '@/data/SpeakerData';
const Speakers = () => {


    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", backgroundColor: "#F2EFEB" }} id="speakers">
            <div className={styles.SpeakersContainer}>
                <motion.div className={styles.title} initial="hidden" whileInView="visible" variants={{
                    hidden: {

                        opacity: 0,
                        y: 20,
                    },
                    visible: {

                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.25,

                        }
                    },
                }}>
                    <h1>
                        Speakers
                    </h1>
                </motion.div>

                <div className={styles.SpeakerCards}>

                    {speakersList.map((item, index) => {
                        return <SpeakerCard key={item.title} speaker={item} />
                    })}


                </div>
            </div>
        </div>

    )
}

export default Speakers
