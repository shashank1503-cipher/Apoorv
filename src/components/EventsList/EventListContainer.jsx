import { useEffect, useState } from "react";
import styles from "../../styles/EventsListContainer.module.css"
import { FaCaretRight } from "react-icons/fa";
import { motion } from 'framer-motion'
import ContainerCard from "../Cards/ContainerCard";
import im from "../../../public/he.png";

const EventListContainer = () => {
    
    const sponsors_class = {
        1: 'Day - 1',
        2: 'Day - 2',
        3: 'Day - 3'
    }

    const [eventsList, setEventsList] = useState({
        1: {
            1: {
                "image" : im,
                "alt" : "event card",
                "subheading" : "sub heading", 
                "title" : "event no.1",
                "subtitles" : "subs", 
                "onHoverAnimation" : "scale" 
            },
            2: {
                "image" : im,
                "alt" : "event card",
                "subheading" : "sub heading", 
                "title" : "event no.2",
                "subtitles" : "subs", 
                "onHoverAnimation" : "scale" 
            },
            3: {
                "image" : im,
                "alt" : "event card",
                "subheading" : "sub heading", 
                "title" : "event no.3",
                "subtitles" : "subs", 
                "onHoverAnimation" : "scale" 
            }
        },
        2: {
            1: {
                "image" : im,
                "alt" : "event card",
                "subheading" : "sub heading", 
                "title" : "event no.1",
                "subtitles" : "subs", 
                "onHoverAnimation" : "scale" 
            },
            2: {
                "image" : im,
                "alt" : "event card",
                "subheading" : "sub heading", 
                "title" : "event no.2",
                "subtitles" : "subs", 
                "onHoverAnimation" : "scale" 
            },
            3: {
                "image" : im,
                "alt" : "event card",
                "subheading" : "sub heading", 
                "title" : "event no.3",
                "subtitles" : "subs", 
                "onHoverAnimation" : "scale" 
            },
            4: {
                "image" : im,
                "alt" : "event card",
                "subheading" : "sub heading", 
                "title" : "event no.4",
                "subtitles" : "subs", 
                "onHoverAnimation" : "scale" 
            }
        },
        3: {
            1: {
                "image" : im,
                "alt" : "event card",
                "subheading" : "sub heading", 
                "title" : "event no.1",
                "subtitles" : "subs", 
                "onHoverAnimation" : "scale" 
            },
            2: {
                "image" : im,
                "alt" : "event card",
                "subheading" : "sub heading", 
                "title" : "event no.2",
                "subtitles" : "subs", 
                "onHoverAnimation" : "scale" 
            }
        },
    })

    const [selectedDay, setSelectedDay] = useState(1)


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
                        {eventsList && Object.keys(eventsList).map((event) => {
                            return (
                                <>
                                    <div
                                        key={event}
                                        className={styles.dial_item}
                                        onClick={() => { setSelectedDay(event) }}
                                    >
                                        {event == selectedDay &&
                                            <div className={styles.selected_sponsor}>
                                                <FaCaretRight />
                                            </div>
                                        }
                                        <div className={styles.longLine}></div>
                                        <div className = {styles.textCon}>
                                            {sponsors_class[event]}
                                        </div>
                                    </div>
                                    {event !== "3" &&
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
                {eventsList[selectedDay] && Object.keys(eventsList[selectedDay]).map((event, index) => {
                    return (
                        <motion.div
                            key={event}
                            
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
                            <ContainerCard 
                                image = {eventsList[selectedDay][event].image}
                                alt = {eventsList[selectedDay][event].alt}
                                subheading = {eventsList[selectedDay][event].subheading} 
                                title = {eventsList[selectedDay][event].title}
                                subtitles = {eventsList[selectedDay][event].subtitles} 
                                onHoverAnimation = {eventsList[selectedDay][event].onHoverAnimation} 
                            />          
                        </motion.div>
                    )}
                )}
            </div>
        </div>
    )
}

export default EventListContainer