
import React, { useEffect, useState } from 'react'
import styles from '../styles/Description.module.css'
import Image from 'next/image'
import sp1 from '../../public/spon1.png'
import sp2 from '../../public/spon2.png'
import sp3 from '../../public/spon3.png'

import a1 from '../assets/Asset_4.png'
import a2 from '../assets/Asset_5.png'
import a3 from '../assets/Asset_6.png'
import a4 from '../assets/Asset_7.png'
import a5 from '../assets/Asset_8.png'
import a6 from '../assets/Asset_9.png'


// import abc from '../../public/img.svg'
import { CollisionButton } from './Buttons/Button'
import Marquee from "react-fast-marquee";

const colors = [
    'blue',
    'green',
    'pink',
    'red',
    // 'purple',
    'yellow',
    'gray',
];

const image = [a1, a2, a3, a4, a5, a6];


const Description = () => {

  const [value, setValue] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
        setValue((v) => ( (v + 1)%6 ));
    }, 500);

    return () =>{
        clearInterval(interval)
    }

  },[])


    return (
        <>
            <div className={styles.back} id="home">
                <div className={styles.sponsers}>
                    <Marquee gradient={false} speed={100}>
                        <Image
                            src={sp1}
                            alt={"sponsers"}

                            style={{
                                maxWidth: '33%',
                                height: 'auto',
                            }}
                        />

                        <Image
                            src={sp2}
                            alt={"sponsers"}
                            // width={1200}
                            // height={400}
                            style={{
                                maxWidth: '33%',
                                height: 'auto',
                            }}
                        />

                        <Image
                            src={sp3}
                            alt={"sponsers"}
                            // width={1200}
                            // height={400}
                            style={{
                                maxWidth: '33%',
                                height: 'auto',
                            }}
                        />



                        <Image
                            src={sp1}
                            alt={"sponsers"}

                            style={{
                                maxWidth: '33%',
                                height: 'auto',
                            }}
                        />

                        <Image
                            src={sp2}
                            alt={"sponsers"}

                            style={{
                                maxWidth: '33%',
                                height: 'auto',
                            }}
                        />
                        <Image
                            src={sp3}
                            alt={"sponsers"}

                            style={{
                                maxWidth: '33%',
                                height: 'auto',
                            }}
                        />
                    </Marquee>
                </div>

                <div style={{
                    maxWidth: '100%',
                    height: '80px',
                }}>

                </div>
            </div>



            <div className={styles.main_div} style={ { backgroundColor: colors[value]} }>
                <div className={styles.wrapper}>
                    <div className={styles.head} >
                        <h1>Apoorv, IIITk&apos;s<br></br>
                            techno-cultural fest,</h1><br></br>
                    </div>
                    <div className={styles.body}>
                        <p>
                            has been celebrating arts, heritage,music and lifestyle
                            since its inception in 2019, A myriad of events with
                            impressive and breathtaking performances has always
                            been the norm.<br></br>
                            It&apos;s the amalgamation of mind gruelling competitions,
                            thought proving expert talks and workshops that
                            stimulate your cerebral matter!<br></br><br></br>
                        </p>
                    </div>
                    <CollisionButton>
                        Register Here !
                    </CollisionButton>
                </div>
                <div className={styles.img}>
                    <Image
                        src={image[value]}
                        alt={"image"}
                        width={350}
                        height={350}
                        style={{
                            maxWidth: '100%',
                            height: '100%',
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default Description
