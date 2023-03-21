import { useState } from "react";
import styles from "../../styles/EventsListContainer.module.css"
import { FaCaretRight } from "react-icons/fa";
import { motion } from 'framer-motion'

const EventListContainer = () => {

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


    return (
        <div className = {styles.eventContainer}>
            <div className = {styles.fixedContent}>
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
                </div>    
            </div>
            <div className = {styles.eventList}>
                <div style = {{minHeight: "100vh", color: "white"}}>
                    asdasd
                </div>
                <div style = {{minHeight: "100vh", color: "white"}}>
                    asdasd
                </div>
                <div style = {{minHeight: "100vh", color: "white"}}>
                    asdasd
                </div>
                <div style = {{minHeight: "100vh", color: "white"}}>
                    asdasd
                </div>
            </div>
        </div>
    )
}

export default EventListContainer