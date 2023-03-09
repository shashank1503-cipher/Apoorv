import React from 'react'
import styles from '../styles/ComingSoon.module.css'
import Footer from "./Footer"

const ComingSoon = () => {
  return (
    <>
    <div className={styles.container}>
        <h1 className={styles.title}>
          Apoorv 2k23 | Coming Soon
        </h1>
        <p className={styles.description}>
          IIITK&#39;s Annual Techno Cultural Fest
        </p> 
      </div>
      <Footer/>
    </>
  )
}

export default ComingSoon