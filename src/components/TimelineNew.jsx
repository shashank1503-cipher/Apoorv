import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/TimelineNew.module.css'
import timelineData from './TimelineData'
import { motion, useScroll } from 'framer-motion'
import { ItemDate, ItemDetails, ItemName } from './ItemProps'
import timelinebg1 from '../assets/timelinebg1.png'
import timelinebg2 from '../assets/timelinebg2.png'
import timelinebg3 from '../assets/timelinebg3.png'


const TimelineNew = () => {
    const [day, setDay] = useState(1)

    const [currentEvent, setCurrentEvent] = useState(timelineData[0].events[1])
    const [previousEvent, setPreviousEvent] = useState(timelineData[0].events[0])
    const [nextEvent, setNextEvent] = useState(timelineData[0].events[2])

    const wrapper = useRef(null)

    const chapterAmount = timelineData.length
    let totalEventsArray = []
    timelineData.forEach((day) => {
        totalEventsArray.push(day.events)
    })

    totalEventsArray = totalEventsArray.flat()
    let handleScroll = () => {

        let scrollY = window.scrollY
        let wrapperHeight = wrapper.current.offsetHeight - 0.4 * wrapper.current.offsetHeight
        let wrapperTopY = wrapper.current.offsetTop

        let chapterHeight = wrapperHeight / chapterAmount
        let chapterHeights = []

        for (let i = 0; i < chapterAmount; i++) {
            chapterHeights.push(i * chapterHeight)
        }

        for (let i = 0; i < chapterAmount; i++) {
            let chapterLength = chapterHeights[i] + wrapperTopY;
            if (scrollY >= chapterLength) {
                setDay(i + 1)
            }
        }

        let totalNumberOfEvents = totalEventsArray.length
        let eventHeight = wrapperHeight / totalNumberOfEvents

        let eventHeights = []

        for (let i = 0; i < totalNumberOfEvents; i++) {
            eventHeights.push(i * eventHeight)
        }

        for (let i = 0; i < totalNumberOfEvents; i++) {
            let eventLength = eventHeights[i] + wrapperTopY;
            if (scrollY >= eventLength) {
                if (i === 0) {
                    setCurrentEvent(totalEventsArray[i])
                    setPreviousEvent(null)
                    setNextEvent(totalEventsArray[i + 1])
                }
                else if (i === totalEventsArray.length - 1) {
                    setCurrentEvent(totalEventsArray[i])
                    setPreviousEvent(totalEventsArray[i - 1])
                    setNextEvent(null)
                }
                else {
                    setCurrentEvent(totalEventsArray[i])
                    setPreviousEvent(totalEventsArray[i - 1])
                    setNextEvent(totalEventsArray[i + 1])
                }
            }

        }


    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (<>
        <div className={styles.timeline} id="timeline">

            <div className={styles.badge}>
                <Image src="/static/images/badge.png" alt="badge" fill />
            </div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <motion.div initial="hidden" whileInView="visible" variants={{
                        hidden: {

                            opacity: 0
                        },
                        visible: {

                            opacity: 1,
                            transition: {
                                delay: .2
                            }
                        },
                    }}>
                        <h1 className={styles.title}>
                            TIME <br />LINE
                        </h1>
                    </motion.div>
                </div>
                <div className={styles.middle}>
                </div>
                <div className={styles.right}>
                </div>
            </div>
            <div className={`${styles.wrapper}`} ref={wrapper} >

                <div className={styles.sticky}>
                    <Image
                        src={timelinebg2}
                        alt={"sponsers"}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex1: '-1',
                            filter: 'brightness(0.45) blur(8px)',

                        }}


                    />
                    <div className={`${styles.container} `}   >
                        <div className={styles.left}>
                        </div>
                        <div className={styles.middle}>
                            <div className={styles.title}>
                                <motion.span key={day} initial="hidden" animate="visible" variants={{
                                    hidden: {
                                        transform: 'translateY(25px)',
                                        opacity: 0
                                    },
                                    visible: {
                                        transform: 'translateY(0px)',
                                        opacity: 1,
                                        transition: {
                                            delay: .2
                                        }
                                    },

                                }}>DAY {day}</motion.span>
                            </div>
                        </div>
                        <div className={styles.right}>

                        </div>
                    </div>
                    <div className={`${styles.container} ${styles.eventContainer} `}   >
                        <div className={styles.left}>
                            <ItemDate />
                            <ItemDate date={currentEvent.date} time={currentEvent.time} framerKey={currentEvent.id} isAnimated={true} isFirst={currentEvent.id === 1} isLast={currentEvent.id === totalEventsArray.length} />
                            <ItemDate />
                        </div>
                        <div className={styles.middle}>
                            <div className={styles.title}>
                                {currentEvent.id === 1 && <ItemName />}
                                {totalEventsArray.map((item, index) => {
                                    return (
                                        <ItemName key={item.id} name={item.name} day={1} index={index + 1} isCurrent={currentEvent.id === item.id} isPrevious={previousEvent?.id === item.id} isNext={nextEvent?.id === item.id} isAnimated={true} isFirst={currentEvent.id === 1} />
                                    )
                                }
                                )}
                            </div>
                        </div>
                        <div className={styles.right}>
                            <ItemDetails />
                            <ItemDetails framerKey={currentEvent.id} details={currentEvent.details} isAnimated={true} isFirst={currentEvent.id === 1} isLast={currentEvent.id === totalEventsArray.length} />
                            <ItemDetails />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.badge}>
                <Image src="/static/images/badge.png" alt="badge" fill />
            </div>
        </div>


















        <div className={styles.timelineMobile}>
            <div className={styles.badge}>
                <Image src="/static/images/badge.png" alt="badge" fill />
            </div>
            <div className={styles.mobileContainer}>
                <div className={styles.mobileLeft}>
                </div>
                <div className={styles.mobileRight}>
                    <h1 className={styles.title}>
                        TIME <br />LINE
                    </h1>
                </div>
            </div>
            {timelineData.map((item, index) => {
                let { day, events } = item;
                return (
                    <>
                        <div className={styles.mobileContainer}>
                            <div className={styles.mobileLeft}>
                                <div className={styles.title}>
                                    DAY  {day}
                                </div>
                            </div>
                            <div className={styles.mobileRight}>

                            </div>
                        </div>
                        <div className={`${styles.mobileContainer} ${styles.mobileEventContainer}`}>
                            <div className={styles.mobileLeft}>
                                {events.map((item, index) => {
                                    return (
                                        <ItemName key={item.id} name={item.name} day={day} index={index + 1} isAnimated={false} />
                                    )
                                })}
                            </div>
                            <div className={styles.mobileRight}>

                                {events.map((item, index) => {
                                    return (
                                        <ItemDate key={item.id} date={item.date} day={day} time={item.time} index={index + 1} isAnimated={false} />
                                    )
                                })}
                            </div>
                        </div>
                    </>)
            })}
            <div className={styles.badge}>
                <Image src="/static/images/badge.png" alt="badge" fill />
            </div>
        </div>
    </>
    )
}

export default TimelineNew