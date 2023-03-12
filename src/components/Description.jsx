
import React from 'react'
import styles from '../styles/Description.module.css'
import Image from 'next/image'
import sp1 from '../../public/spon1.png'
import sp2 from '../../public/spon2.png'
import sp3 from '../../public/spon3.png'


import abc from '../../public/img.svg'
import { CollisionButton } from './Buttons/Button'
import Marquee from "react-fast-marquee";

const Description = () => {
    return (
        <div className='desc_main'>
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



            <div className={styles.main_div}>
                <div className={styles.img}>
                    <Image
                        src={abc}
                        alt={"image"}
                        width={350}
                        height={350}
                        style={{
                            maxWidth: '100%',
                            height: '100%',
                        }}
                    />
                </div>
                <div className={styles.desc_text}>
                <div className={styles.head} >
                    <h1>Apoorv, IIITk's<br></br>
                        techno-cultural fest,</h1><br></br>
                </div>
                <div className={styles.desc_textbody}>
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
            </div>
        </div>
    );
}

export default Description
