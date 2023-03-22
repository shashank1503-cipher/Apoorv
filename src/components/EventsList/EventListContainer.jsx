import { useEffect, useState } from "react";
import styles from "../../styles/EventsListContainer.module.css"
import { FaCaretRight } from "react-icons/fa";
import { motion } from 'framer-motion'
// import ContainerCard from "../Cards/ContainerCard";
import im from "../../../public/he.png";
import {Parallax} from 'react-scroll-parallax'
import Image from "next/image";

const EventListContainer = () => {
    
    const catogories = [
        'all',
       'cat 1',
       'cat 2',
       'cat 3',
    ]

    const [eventsList, setEventsList] = useState([
        {
            "image" : im,
            "alt" : "event card",
            "subheading" : "sub heading", 
            "title" : "event no.1",
            "subtitles" : "subs", 
            "onHoverAnimation" : "scale",
            'cat': "cat 1"
        },
        {
            "image" : im,
            "alt" : "event card",
            "subheading" : "sub heading", 
            "title" : "event no.2",
            "subtitles" : "subs", 
            "onHoverAnimation" : "scale",
            'cat': "cat 1"
        },
        {
            "image" : im,
            "alt" : "event card",
            "subheading" : "sub heading", 
            "title" : "event no.3",
            "subtitles" : "subs", 
            "onHoverAnimation" : "scale",
            'cat': "cat 2"
        },
        {
            "image" : im,
            "alt" : "event card",
            "subheading" : "sub heading", 
            "title" : "event no.4",
            "subtitles" : "subs", 
            "onHoverAnimation" : "scale",
            'cat': "cat 3"
        },
           
    ])

    const ContainerCard = (props) => {

        const {image, subheading, title} = props

        return (
            <div className={styles.card}>
                <div className={`${styles.imageWrapper}`} >
                    <Image src={image} alt={'back image'} fill />
                </div>
                <div className={styles.divider}>
                    <hr />
                </div>
                <div className={styles.content}>
                    <p className={styles.alias}><FaCaretRight /> {subheading}</p>
                    <h1>{title}</h1>
                </div>
            </div>
        )
    }


    const [selectedCat, setSelectedCat] = useState('all')


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
                        {catogories.map((event, index) => {
                            return (
                                <>
                                    <div
                                        key={event}
                                        className={styles.dial_item}
                                        onClick={() => { setSelectedCat(event) }}
                                    >
                                        {event == selectedCat &&
                                            <div className={styles.selected_sponsor}>
                                                <FaCaretRight />
                                            </div>
                                        }
                                        <div className={styles.longLine}></div>
                                        <div className = {styles.textCon}>
                                            {event}
                                        </div>
                                    </div>
                                    {index !== (catogories.length-1) &&
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

            <div className={styles.mobile_dial}>
                        
                <select 
                    className={styles.mobile_dial_select} 
                    value={selectedCat}
                    onChange={(e) => setSelectedCat(e.target.value)}
                >
                    
                    {catogories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}

                </select>

            </div>

            <div className = {styles.eventList}>
                {eventsList && eventsList.filter(e => selectedCat==='all' || e.cat === selectedCat).map((event, index) => {
                    return (
                        <Parallax speed={index&1?5:-5} key={event.title}>
                        <motion.div
                            key={event.title}
                            
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
                                image = {event.image}
                                alt = {event.alt}
                                subheading = {event.subheading} 
                                title = {event.title}
                                subtitles = {event.subtitles} 
                                // onHoverAnimation = {event.onHoverAnimation} 
                            />
                        </motion.div>
                        </Parallax>
                    )}
                )}
            </div>
        </div>
    )
}

export default EventListContainer