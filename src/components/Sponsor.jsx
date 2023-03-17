import React, { useEffect, useState } from 'react'
import styles from '../styles/Sponsors.module.css'
import { FaCaretRight } from 'react-icons/fa'
import sponsorbg from '../assets/sponsors.png'
import sponsorHandShake from '../assets/sponsors_handshake.svg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CollisionButton } from './Buttons/Button'

const Sponsor = () => {

    const sponsors_class = {
        1: 'PLATINUM',
        2: 'GOLD',
        3: 'SILVER',
        4: 'BRONZE'
    }

    const [sponsorsList, setSponsorsList] = useState({
        1: {
            'google': {
                logo: '/static/logos_sponsors/logo1.svg',
            },
            'facebook': {
                logo: '/static/logos_sponsors/logo1.svg',
            },
            'oracle': {
                logo: '/static/logos_sponsors/logo2.svg'
            },
            'youtube': {
                logo: '/static/logos_sponsors/logo2.svg'
            },

        },
        2: {
            'logo 1': {
                logo: '/static/logos_sponsors/logo1.svg'
            },
            'logo 2': {
                logo: '/static/logos_sponsors/logo2.svg'
            },
            'logo 3': {
                logo: 'static/logos_sponsors/logo3.svg'
            },
            'logo 4': {
                logo: 'static/logos_sponsors/logo4.svg'
            }
        },
        3: {
            'logo 5': {
                logo: '/static/logos_sponsors/logo1.svg'
            },
            'logo 6': {
                logo: '/static/logos_sponsors/logo2.svg'
            },
            'logo 7': {
                logo: 'static/logos_sponsors/logo3.svg'
            },
            'logo 8': {
                logo: 'static/logos_sponsors/logo4.svg'
            }
        },
        4: {
            'logo 11': {
                logo: '/static/logos_sponsors/logo1.svg'
            },
            'logo 12': {
                logo: '/static/logos_sponsors/logo2.svg'
            },
            'logo 13': {
                logo: 'static/logos_sponsors/logo3.svg'
            },
            'logo 14': {
                logo: 'static/logos_sponsors/logo4.svg'
            }
        }
    })

    const [selectedSponsor, setSelectedSponsor] = useState(1)


    // const detectTrackpad = () => {



    // };

    // const handleWheel = (e) => {

    //     if(detectTrackpad()) return true

    //     e.preventDefault()
    //     console.log(e.deltaY)
    //     if(e.deltaY > 1)
    //     setSelectedSponsor(selectedSponsor<4?selectedSponsor+1:1)
    //     else
    //     setSelectedSponsor(selectedSponsor>1?selectedSponsor-1:4)
    // }

    // useEffect(() => {

    //     document.getElementById('dial')?.addEventListener('wheel',handleWheel)

    //     return () => {
    //         document.getElementById('dial')?.removeEventListener('wheel', handleWheel)
    //     }

    // })

    return (
        <div className={styles.main_container} id="sponsors" >
            <Image
                src={sponsorbg}
                alt={"sponsers"}
                style={{
                    position: 'absolute',
                    width: '100%',
                    // height: '100%',
                    objectFit: 'cover',
                    // top: 0,
                }}
            />
            <motion.div initial="hidden" whileInView="visible" variants={{
                hidden: {

                    opacity: 0,
                    y: 50,
                },
                visible: {

                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.25,

                    }
                },
            }} className={styles.prizes_container}>
                <div className={styles.prizes_heading}>
                    <h1>Rs. 1,00,000+</h1>
                </div>
                <div className={styles.prizes_text}>
                    in prizes to be won
                </div>
                <div className={styles.prizes_text}>
                    along with exciting goodies from
                </div>
                <div className={styles.dial_heading}>
                    <h1>Our Sponsors</h1>
                </div>
            </motion.div>

            <div className={styles.dial_container}>


                <motion.div
                    className={styles.dial}
                    id="dial"
                >
                    <div className={styles.lines}>
                        <div className={styles.longLine_d}></div>
                        <div className={styles.shortLine_d}></div>
                        <div className={styles.shortLine_d}></div>
                        <div className={styles.shortLine_d}></div>
                    </div>
                    {sponsorsList && Object.keys(sponsorsList).map((sponsor) => {
                        console.log("working...")
                        return (
                            <>
                                <div
                                    key={sponsor}
                                    className={styles.dial_item}
                                    onClick={() => { setSelectedSponsor(sponsor) }}
                                >
                                    {sponsor == selectedSponsor &&
                                        <div className={styles.selected_sponsor}>
                                            <FaCaretRight />
                                        </div>
                                    }
                                    <div className={styles.longLine}></div>
                                    <div>
                                        {sponsors_class[sponsor]}
                                    </div>
                                </div>
                                {sponsor !== "4" &&
                                    <div className={styles.lines}>
                                        <div className={styles.shortLine}></div>
                                        <div className={styles.shortLine}></div>
                                        <div className={styles.shortLine}></div>
                                    </div>}
                            </>

                        )
                    }
                    )}
                    <div className={styles.lines}>
                        <div className={styles.shortLine_d}></div>
                        <div className={styles.shortLine_d}></div>
                        <div className={styles.shortLine_d}></div>
                        <div className={styles.longLine_d}></div>
                    </div>


                </motion.div>

                <div
                    className={styles.sponsors}
                >
                    {sponsorsList && sponsorsList[selectedSponsor] && Object.keys(sponsorsList[selectedSponsor])?.map((sponsor, i) => {

                        // const ratts = {
                        //     0: { x: 1, y: 1 },
                        //     1: { x: -1, y: 1 },
                        //     2: { x: 1, y: -1 },
                        //     3: { x: -1, y: -1 },
                        // }
                        // console.log(sponsor, i)
                        // console.log(sponsor, i)
                        return (
                            <motion.div

                                key={sponsor}
                                className={styles.sponsor_item}
                                initial="hidden" animate={'visible'} variants={{
                                    hidden: {

                                        y: 50,
                                        opacity: 0
                                    },
                                    visible: {

                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            delay: .2,

                                        }
                                    },
                                }}
                            >


                                <img className={styles.sponsor_logo}
                                    src={sponsorsList[selectedSponsor][sponsor]?.logo}
                                />
                                <div
                                    className={styles.sponsor_name}
                                >
                                    {sponsor.toUpperCase()}
                                </div>

                            </motion.div>
                        )
                    }
                    )}
                </div>



            </div>

            <motion.div className={styles.make_sponsor} initial="hidden" whileInView="visible" variants={{
                hidden: {

                    opacity: 0,
                    y: 50,
                },
                visible: {

                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.25,

                    }
                },
            }}>

                <div className={styles.make_sponsor_disc}>

                    <div className={styles.make_sponsor_disc_title}>
                        Want to be a sponsor?
                    </div>

                    <div className={styles.make_sponsor_disc_text}>
                        has been celebrating arts, heritage, music and lifestyle since its inception in 2019. A myriad of events with impressive and breathtaking performances has always
                    </div>
                    <div className={styles.buttonGroup}>
                        <CollisionButton style={{ marginTop: "1rem" }} onClick={() => window.location = 'mailto:apoorv@iiitkottayam.ac.in'}>Contact Us</CollisionButton>
                    </div>
                </div>

                <div
                    className={styles.make_sponsor_image}
                >
                    <Image
                        src={sponsorHandShake}

                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'relative'
                        }}

                    />
                </div>
            </motion.div>

        </div>
    )
}

export default Sponsor
