import React from 'react'
import styles from '../styles/Speakers.module.css'

import Image from 'next/image'

const SpeakerCard = ({speaker}) => {
  return (
    <div className={styles.CardContainer}>

      {/* <img className={styles.CardImage} src="https://images.freeimages.com/images/previews/a3e/wild-horse-1334844.jpg"  /> */}
      <Image className={styles.CardImage} src={speaker.image} alt={speaker.title} />

      <div className={styles.CardTitle}>
        {/* <h4> Title </h4> */}
        <h4>{speaker.title}</h4>
      </div>

      <div className={styles.CardDescription}>
        {/* <p>description sjdg kdsjvmb xmfgnv xmcvn xmv m,dsv zxcmbn lekjfch skjdh </p> */}
        <p>{speaker.description}</p>
      </div>

    </div>
  )
}

export default SpeakerCard
