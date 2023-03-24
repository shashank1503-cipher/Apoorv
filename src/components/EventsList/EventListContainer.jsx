import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "../../styles/EventsListContainer.module.css"
import { FaCaretRight } from "react-icons/fa";
import { motion } from 'framer-motion'
import {Parallax} from 'react-scroll-parallax'
import Image from "next/image";
import { events } from "@/data/Events";

const EventListContainer = () => {

    const catogories = [
        'technical',
        'cultural',
        'trendles',
        'all',
    ]

    const catogoriesSub = {
        'all' : [],
       'technical' : [
            'gaming',
            "hackathons",
            'contests',
        ],
       'cultural' : [
            'dancing',
            'drama',
            'singing',
            'art'
       ],
       'trendles' : [
            'literary',
            'finance',
            'art'
       ],
       
       
    }

    // console.log(events)
    const [eventsList, setEventsList] = useState(events)

    const ContainerCard = (props) => {

        const {poster, subheading, name, link} = props

        return (
            <div key={name} className={styles.card} onClick={() => window.location.href = `/event/${link}`}>
                <div key={name} className={`${styles.imageWrapper}`} >
                    <Image src={poster || '/he.png'} alt={'back image'} fill />
                </div>
                <div className={styles.divider}>
                    <hr />
                </div>
                <div className={styles.content}>
                    <p className={styles.alias}><FaCaretRight /> {subheading}</p>
                    <h1>{name}</h1>
                </div>
            </div>
        )
    }


    const [selectedCat, setSelectedCat] = useState('all')
    const [selectedSub, setSelectedSub] = useState("")

    const firstUpdate = useRef(true)

    useLayoutEffect(() => {
        if(firstUpdate.current){
            firstUpdate.current = false;
            return;
        }

        document.getElementById('eventList').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })

    })

    useEffect(() => {

        

    }, [selectedCat, selectedSub])

    return (
        <div className = {styles.eventContainer}>
            <div className = {styles.fixedContent}>
                <div className={styles.dial_container}>
                    <motion.div
                        className={styles.dial}
                        id="dial"
                    >
                        {catogories.map((event, index) => {
                            return (
                                <div
                                key={index}
                                >
                                    <div
                                        
                                        className={styles.dial_item}
                                        onClick={() => { setSelectedCat(event); setSelectedSub("") }}
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
                                    {event === selectedCat?
                                        catogoriesSub[selectedCat].map((e,i) => (
                                            <motion.div className={e!==selectedSub?styles.dial_sub_item:styles.dial_sub_item_selected}
                                                onClick={() => setSelectedSub(e)}
                                                key={e}
                                                initial="hidden" animate={'visible'} variants={{
                                                    hidden: {
                    
                                                        x: -20,
                                                        opacity: 0
                                                    },
                                                    visible: {
                    
                                                        x: 0,
                                                        opacity: 1,
                                                        transition: {
                                                            duration: 0.05,
                                    
                                                        }
                                                    },
                                                }}

                                            >

                                            {e == selectedSub &&
                                                <div className={styles.selected_sponsor}>
                                                    <FaCaretRight />
                                                </div>
                                            }

                                                <div className={e===selectedSub?styles.shortLine:styles.shortLine_d}></div>
                                                    <div className = {styles.textCon}>
                                                        {e}
                                                    </div>

                                            </motion.div>
                                        )):event !== 'all'?<div className={styles.lines}>
                                        <div className={styles.shortLine_d}></div>
                                        <div className={styles.shortLine_d}></div>
                                        <div className={styles.shortLine_d}></div>
                                        </div>:<></>
                                    
                                    }
                                </div>

                            )
                        }
                        )}
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

            <div className = {styles.eventList} id="eventList">
                {eventsList && eventsList.filter(e => selectedCat==='all' || 
                    selectedSub === "" && e.cat.includes(selectedCat) ||
                    e.cat.includes(selectedCat) && e.cat.includes(selectedSub)
                        
                ).map((event, index) => {
                    return (
                        <motion.div
                            key={event.key}
                            initial="hidden" animate={'visible'} variants={{
                                hidden: {
                                    y: 50,
                                    opacity: 0
                                },
                                visible: {

                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: 0.2
                                    }
                                },
                            }}
                        >
                            <Parallax speed={index&1?5:-5} key={event.key}>
                            
                            <ContainerCard
                                poster = {event.poster}
                                alt = {event.alt}
                                link={event.link}
                                subheading = {event.subheading} 
                                name = {event.name}
                                subtitles = {event.subtitles} 
                                // onHoverAnimation = {event.onHoverAnimation} 
                            />
                        </Parallax>
                        </motion.div>
                    )}
                )}
            </div>
        </div>
    )
}

export default EventListContainer