import React from 'react'
import styles from '../styles/Speakers.module.css'

import Image from 'next/image'
import { motion } from 'framer-motion'
const SpeakerCard = ({ speaker }) => {
  return (
    <motion.div className={styles.CardContainer} initial="hidden" whileInView="visible" variants={{
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

      {/* <img className={styles.CardImage} src="https://images.freeimages.com/images/previews/a3e/wild-horse-1334844.jpg"  /> */}
      <div className={styles.imageWrapper}>
        <Image src={speaker.image} alt={speaker.title} fill />
      </div>
      <div className={styles.CardTitle}>
        {/* <h4> Title </h4> */}
        <h4>{speaker.title}</h4>
      </div>

      <div className={styles.CardDescription}>
        {/* <p>description sjdg kdsjvmb xmfgnv xmcvn xmv m,dsv zxcmbn lekjfch skjdh </p> */}
        <p>{speaker.description}</p>
      </div>

    </motion.div>
  )
}

export default SpeakerCard
