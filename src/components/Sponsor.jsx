import React, { useEffect, useState } from 'react'
import styles from '../styles/Sponsors.module.css'
import { FaCaretRight } from 'react-icons/fa'
import sponsorbg from '../assets/sponsors.png'
import sponsorHandShake from '../assets/sponsors_handshake.svg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CollisionButton } from './Buttons/Button'
// import { useDetectScroll } from '@smakss/react-scroll-direction'

const Sponsor = () => {

    const sponsors_class = {
        1: 'PLATINUM',
        2: 'GOLD',
        3: 'SILVER',
        4: 'BRONZE'
    }

    // const scrollDirection = useDetectScroll({})

    // let direction = scrollDirection === 'up' ? 1 : -1

    // const handleScroll = () => {

    // }

    // useEffect(() => {
    //     document.getElementById('dial').addEventListener(
    //         'scroll',
    //         (e) => {
    //             console.log('scrolling', e)
    //         },
    //         false
    //     )

    // }, [])

    // const controls = useAnimation()
    // const [ref, inView] = useInView()

    // useEffect(() => {
    //     if (inView) {
    //         controls.start('visible')
    //     }
    // }, [inView, controls])

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

    useState(() => {
        console.log(sponsorsList)
    }, [sponsorsList])

    const [selectedSponsor, setSelectedSponsor] = useState(1)

    useEffect(() => {

        document.addEventListener('scroll', (e) => {

        })

    })

    return (
        <div className={styles.main_container}>

            <div className={styles.dial_container}>

                <Image
                    src={sponsorbg}
                    alt={"sponsers"}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        // top: 0,
                    }}
                />
                <div
                    className={styles.dial}
                    id="dial"
                >
                    <div className={styles.lines}>
                        <div className={styles.longLine_d}></div>
                        <div className={styles.shortLine_d}></div>
                        <div className={styles.shortLine_d}></div>
                        <div className={styles.shortLine_d}></div>
                    </div>
                    {Object.keys(sponsorsList).map((sponsor) => {
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


                </div>

                <div
                    className={styles.sponsors}
                >
                    {Object.keys(sponsorsList[selectedSponsor]).map((sponsor, i) => {

                        const ratts = {
                            0: { x: 1, y: 1 },
                            1: { x: -1, y: 1 },
                            2: { x: 1, y: -1 },
                            3: { x: -1, y: -1 },
                        }
                        // console.log(sponsor, i)
                        return (
                            <motion.div

                                key={sponsor}
                                className={styles.sponsor_item}
                                initial="hidden" animate={'visible'} variants={{
                                    hidden: {
                                        x: 100 * ratts[i].x,
                                        y: 100 * ratts[i].y,
                                        opacity: 0
                                    },
                                    visible: {
                                        x: 0,
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            delay: .2
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

            <div className={styles.make_sponsor}>

                <div className={styles.make_sponsor_disc}>

                    <div className={styles.make_sponsor_disc_title}>
                        Want to be a sponsor?
                    </div>

                    <div className={styles.make_sponsor_disc_text}>
                        has been celebrating arts, heritage, music and lifestyle since its inception in 2019. A myriad of events with impressive and breathtaking performances has always
                    </div>

                    <CollisionButton style={{ width: "50%",marginTop:"1rem" }}>Contact Us</CollisionButton>
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
            </div>

        </div>
    )
}

export default Sponsor
