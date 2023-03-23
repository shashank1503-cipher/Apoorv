import React from 'react'
import styles from '../styles/Description.module.css'
import Image from 'next/image'
import sp1 from '../../public/Devfolio - White.svg'
import sp2 from '../../public/spon2.png'
import sp3 from '../../public/spon3.png'


import abc from '../../public/img.svg'
import { CollisionButton } from './Buttons/Button'
import Marquee from "react-fast-marquee";

const Description = () => {
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
                                height: '50%',
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
                                height: '50%',
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
                <div className={styles.wrapper}>
                    <div className={styles.head} >
                        <h1>APOORV<br />
                            The techno-cultural festival of IIIT Kottayam
                        </h1>
                    </div>
                    <div className={styles.body}>
                        <p>
                            A place where stellar tech meets the enlightenment of art, where we celebrate the quantum leap of
                            computers and how classical music is unbeatable till date.<br></br>
                            A festival of many, filled with insightful
                            workshops to sensational performances, intense hackathons to thought provoking debates, Apoorv
                            offers an unparalleled opportunity to exhibit your skills and ignite your creative spark!
                            <br></br><br></br>
                        </p>
                    </div>
                    <CollisionButton>
                        Register Here !
                    </CollisionButton>
                </div>
                <div className={styles.img}>
                    <Image
                        src={abc}
                        alt={"image"}
                        fill
                    />
                </div>
            </div>
        </>
    );
}

export default Description
