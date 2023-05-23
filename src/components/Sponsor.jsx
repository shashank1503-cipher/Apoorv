import React, { useEffect, useState } from 'react'
import styles from '../styles/Sponsors.module.css'
import { FaCaretRight } from 'react-icons/fa'
import sponsorbg from '../assets/sponsors.png'
import sponsorHandShake from '../assets/sponsors_handshake.svg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CollisionButton } from './Buttons/Button'
import { Sponsors } from '@/data/Sponsors'

const Sponsor = () => {

    const sponsors_class = {
        1: 'TITLE',
        2: 'TECH',
        3: 'EMERALD',
        // 4: "REGISTRATION"
    }

    const [sponsorsList, setSponsorsList] = useState(Sponsors)

    useEffect(() => {
        console.log(Sponsors)
    }, [sponsorsList])

    const [selectedSponsor, setSelectedSponsor] = useState(1)


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
                <div className={styles.prizes_text}>
                    An astounding prize pool worth
                </div>
                <div className={styles.prizes_heading}>
                    <h1>Rs. 2,50,000+</h1>
                </div>
                <div className={styles.prizes_text}>
                    In addition to exciting swags and goodies from .
                </div>
                <div className={styles.dial_heading}>
                    <h1>Our Acclaimed Sponsors</h1>
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
                    {sponsorsList && Object.keys(sponsors_class).map((sponsor) => {
                        console.log("working...")
                        console.log(sponsor)
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
                                {sponsor !== "3" &&
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
                        console.log(sponsor)
                        return (
                            <motion.div

                                key={sponsorsList[selectedSponsor][sponsor].name}
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

                                
                                <div className={styles.imageWrapper_sponsors}>

                                    <Image
                                        src={sponsorsList[selectedSponsor][sponsor]?.logo || sponsorHandShake}
                                        className={styles.imageSponsors}
                                        fill={'contain'}
                                        alt='Logo Not Available'
                                        />
                                </div>
                                <div
                                    className={styles.sponsor_name}
                                >
                                    {sponsorsList[selectedSponsor][sponsor].name.toUpperCase()}
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
                        An opportunity for you to gain on-campus branding and publicity during the festival amongst 2000+
                        odd participants with banners, social media, crowd interactions, website branding and many more.
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
