
import React, { useEffect, useState } from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'


const Hero = () => {

    const [animation, setAnimation] = useState(true)

    useEffect(() => {

        const myInterval = setInterval(() => {
            setAnimation(!animation);
          }, 10000);

          return () => clearInterval(myInterval)

    })

    // useEffect(() => {
    //     console.log(animation)
    // }, [animation])

    return(
        <div className={styles.main}>
            <div className={styles.img_cont}>

            <Image
                className={animation?styles.img_back:styles.img_back_1}
                src={"/heroBack.png"}
                alt={"hero"}
                width={450}
                height={450}
                
                // text-align={"center"}
                style={{
                    // background: 'red',
                    maxWidth: '100%',
                    height: '100%',
                    position: 'absolute',
                }}
            />

            <Image
                className={styles.img}
                src={"/hero.png"}
                alt={"hero"}
                width={450}
                height={450}
                // text-align={"center"}
                style={{
                    position:'relative',
                    maxWidth: '100%',
                    height: '100%',
                    zIndex: 12,
                }}
                />

           
            </div>
            <div className={styles.content}>
                <div className={styles.head}>
                    <h1>The one of its<br></br>kind event of th year</h1>
                </div>
                <p>A fest to mirror the beautiful chaos of nature and keep<br></br> you on your toes, stir souls and spark your creative<br></br>flair.</p>
                
                <div>

                <button className={styles.button1}>Register!</button>
                <button className={styles.button}>Register!</button>
                </div>
                <div className={styles.link}>
                    {/* <hr></hr>
                    <p>MUSIC&emsp;&emsp;&emsp;&emsp;ART&emsp;&emsp;&emsp;&emsp;DANCE&emsp;&emsp;&emsp;&emsp;DRAMA</p>
                    <hr></hr> */}
                    <div>MUSIC</div>
                    <div>ART</div>
                    <div>DANCE</div>
                    <div>DRAMA</div>
                </div>
            </div>
           
       </div>
   )
}

export default Hero