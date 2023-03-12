import React from 'react'
import styles from '../styles/Timeline.module.css'
import { motion } from 'framer-motion'
import { useDetectScroll } from '@smakss/react-scroll-direction'


const ItemName = ({ name, isAnimated, isCurrent, isPrevious, isNext, }) => {

    const [scrollDir] = useDetectScroll({})
    let isVisible = false
    let scale = 0
    let opacity = 0
    let transformX = 0
    let initialScale = 0
    let initialOpacity = 0
    let initialTransformX = 0
    if (isCurrent) {
        initialScale = 1
        initialOpacity = 0.5
        // initialTransformX = '-50%'
        initialTransformX = scrollDir === 'up' ? '50%' : '-50%'
        isVisible = true
        scale = 1.2
        opacity = 1
        transformX = '0%'
    }
    if (isPrevious) {
        initialScale = 1
        initialOpacity = 1
        initialTransformX = scrollDir === 'up' ? '-100%' : '0%'
        isVisible = true
        scale = 1
        opacity = 0.5
        transformX = '-50%'
    }
    if (isNext) {
        initialScale = 0
        initialOpacity = 0
        initialTransformX = scrollDir === 'up' ? '25%' : '0%'
        isVisible = true
        scale = 1
        opacity = 0.5
        transformX = '50%'
        // transformX = isFirst ? '100%' : '50%'
    }



    return (<>
        {isAnimated ? isVisible ? <motion.div className={styles.content} initial={{ scale: initialScale, opacity: initialOpacity, y: initialTransformX }} animate={{ scale: scale, opacity: opacity, y: transformX }} transition={{ ease: "easeOut", duration: .2 }}>
            <div className={styles.eventName}>
                {name}
            </div>
        </motion.div> : null : <div className={styles.content}>{name}</div>}
    </>


    )
}

const ItemDate = ({ date, time, isAnimated, framerKey, isFirst, isLast }) => {
    console.log('isFirst', isFirst, 'isLast', isLast, date)
    return (
        <>
            {isAnimated ? <motion.div className={styles.content} key={framerKey} initial="hidden" animate="visible" variants={{
                hidden: {
                    transform: 'translateY(10%)',
                    opacity: 0
                },
                visible: {
                    transform: isFirst ? 'translateY(-25%)' : isLast ? 'translateY(-35%)' : 'translateY(-10%)',
                    opacity: 1,
                    transition: {
                        delay: .2
                    }
                },

            }}>

                <div className={styles.date}>
                    {date}
                </div>
                <div className={styles.time}>
                    {time}
                </div>
            </motion.div> : <div className={styles.content}>
                <div className={styles.date}>
                    {date}
                </div>
                <div className={styles.time}>
                    {time}
                </div>
            </div>}
        </>

    )
}

const ItemDetails = ({ details, isAnimated, framerKey, isFirst, isLast }) => {

    return (
        <>
            {isAnimated ? <motion.div className={styles.content} key={framerKey} initial="hidden" animate="visible" variants={{
                hidden: {
                    transform: 'translateY(10%)',
                    opacity: 0
                },
                visible: {
                    transform: isFirst ? 'translateY(-25%)' : isLast ? 'translateY(-35%)' : 'translateY(-10%)',
                    opacity: 1,
                    transition: {
                        delay: .2
                    }
                },

            }}>
                {details}
            </motion.div> : <div className={styles.eventDetails}>
                {details}
            </div>}

        </>
    )
}
export { ItemName, ItemDate, ItemDetails }