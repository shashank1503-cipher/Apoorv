import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Timeline.module.css'
import timelineData from './TimelineData'
import { motion } from 'framer-motion'
import { ItemDate, ItemDetails, ItemName } from './ItemProps'
import { useDetectScroll } from "@smakss/react-scroll-direction";

const Timeline = () => {

    const [day, setDay] = useState(1)
    const [events, setEvents] = useState(timelineData[0].events)
    const stickyContainerRef = useRef(null)

    const scrollDirection = useDetectScroll({});

    let direction = scrollDirection === "up" ? 1 : -1;


    const chapterAmount = timelineData.length
    const handleScroll = () => {
        const stickyContainer = stickyContainerRef.current
        const componentHeight = stickyContainer.getBoundingClientRect().height
        const componentTopY = stickyContainer.getBoundingClientRect().top
        const scrollY = window.scrollY
        // console.log(componentHeight, componentTop, scrollY)

        const chapterHeights = []
        for (let index = 1; index <= timelineData.length; index++) {
            const chapterHeight = componentHeight / chapterAmount;
            chapterHeights.push(chapterHeight * index);
        }



        for (let index = 0; index < chapterHeights.length; index++) {
            let chapterLength = chapterHeights[index] + componentTopY;
            if (scrollY >= chapterLength) {
                setDay(timelineData[index].day);
                setEvents(timelineData[index].events)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [handleScroll])

    return (<>
        <div className={styles.timeline}>
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
                    {/* <motion.div initial="hidden" whileInView="visible" variants={{
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
                        <div className={styles.sideParagraph}>
                            has been celebrating arts, heritage, music and lifestyle since its inception in 2019. A myriad of events with impressive and breathtaking performances has always been the norm.
                            It&apos;s the amalgamation of mind gruelling competitions, thought provoking expert talks and workshops that stimulate your cerebral matter!
                        </div>
                    </motion.div> */}
                </div>
            </div>
            <div className={styles.stickyContainer} ref={stickyContainerRef}>
                <div className={styles.sticky}>
                    <div className={`${styles.container} ${styles.dayContainer}`}>
                        <div className={styles.left}>
                            <div className={styles.imageContainer}>
                                {day % 2 === 0 ? <motion.div className={styles.imageWrapper} key={day} initial="hidden" animate="visible" variants={{
                                    hidden: {
                                        x: 100,
                                        opacity: 0
                                    },
                                    visible: {
                                        x: 0,
                                        opacity: 1,
                                        transition: {
                                            delay: .2
                                        }
                                    },

                                }}>
                                    <Image fill alt={'snapshots'} src={timelineData[day - 1].imageURL}></Image>
                                </motion.div> : null}
                            </div>

                        </div>
                        <div className={styles.middle}>
                            <div className={styles.title}>

                                <span>DAY  <motion.span key={day} initial="hidden" animate="visible" variants={{
                                    hidden: {
                                        y: -100,
                                        opacity: 0
                                    },
                                    visible: {
                                        y: 100,
                                        opacity: 1,
                                        transition: {
                                            delay: .2
                                        }
                                    },

                                }}>{day}</motion.span> </span>

                            </div>
                        </div>
                        <div className={styles.right}>
                            {day % 2 === 1 ? <motion.div className={styles.imageWrapper} key={day} initial="hidden" animate="visible" variants={{
                                hidden: {
                                    x: -100,
                                    opacity: 0
                                },
                                visible: {
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: .2
                                    }
                                },

                            }}>
                                <Image fill alt={'snapshots'} src={timelineData[day - 1].imageURL}></Image>
                            </motion.div> : null}

                        </div>
                    </div>
                    <div className={`${styles.container} ${styles.eventContainer}`}>
                        <div className={styles.left}>
                            {events.map((item, index) => {
                                return (
                                    <ItemDate key={item.id} date={item.date} day={day} index={index + 1} />
                                )
                            })}
                        </div>
                        <div className={styles.middle}>
                            {events.map((item, index) => {
                                return (
                                    <ItemName key={item.id} name={item.name} day={day} index={index + 1} />
                                )
                            })}
                        </div>
                        <div className={styles.right}>
                            {events.map((item, index) => {
                                return (

                                    <ItemDetails key={item.id} details={item.details} day={day} index={index + 1} />

                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.badge}>
                <Image src="/static/images/badge.png" alt="badge" fill />
            </div>

        </div>
        <div className={styles.timelineMobile}>
            <div classname={styles.mobileContainer}>
                <div className={styles.mobileLeft}>
                    <div className={styles.mobileStrip}>
                    </div>
                </div>
                <div className={styles.mobileRight}>
                </div>
            </div>
        </div>
    </>
    )
}

export default Timeline