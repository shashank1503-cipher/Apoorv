
import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import { CollisionButton } from './Buttons/Button'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <>
            <motion.div className={styles.main} initial="hidden" whileInView="visible" variants={{
                hidden: {

                    opacity: 0,
                    y: 20,
                },
                visible: {

                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,

                    }
                },
            }}>
                <Image
                    className={styles.img}
                    src={'https://res.cloudinary.com/dpjf6btln/image/upload/v1678782197/he_tfjsfb.svg'}
                    alt={"hero"}
                    width={600}
                    height={600}
                    // text-align={"center"}
                    style={{
                        maxWidth: '100%',
                        height: '100%',
                    }}
                />
                <div className={styles.content}>
                    <div className={styles.head}>
                        <h1>The one of its<br></br>kind event of th year 3</h1>
                    </div>
                    <p>A fest to mirror the beautiful chaos of nature and keep<br></br> you on your toes, stir souls and spark your creative<br></br>flair.</p>

                    <CollisionButton style={{ marginTop: "1rem", alignItems: "center" }}>Register Now</CollisionButton>

                    <div className={styles.link}>
                        <hr></hr>
                        <p>MUSIC&emsp;&emsp;&emsp;&emsp;ART&emsp;&emsp;&emsp;&emsp;DANCE&emsp;&emsp;&emsp;&emsp;DRAMA</p>
                        <hr></hr>
                    </div>
                </div>

            </motion.div>
        </>
    )
}

export default Hero