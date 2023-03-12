
import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import img from '../../public/he.svg'
import { CollisionButton } from './Buttons/Button'


const Hero = () => {
    return (
        <>
            <div className={styles.main}>
                <Image
                    className={styles.img}
                    src={img}
                    alt={"hero"}
                    width={450}
                    height={450}
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

                    <CollisionButton style={{ width: "50%", marginTop: "1rem", alignItems: "center" }}>Register Now</CollisionButton>

                    <div className={styles.link}>
                        <hr></hr>
                        <p>MUSIC&emsp;&emsp;&emsp;&emsp;ART&emsp;&emsp;&emsp;&emsp;DANCE&emsp;&emsp;&emsp;&emsp;DRAMA</p>
                        <hr></hr>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero