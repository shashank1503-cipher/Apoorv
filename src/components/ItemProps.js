import React from 'react'
import styles from '../styles/Timeline.module.css'
import { motion } from 'framer-motion'

const ItemName = ({ name, day, index, isAnimated }) => {

    return (<>
        {isAnimated ? <motion.div className={styles.content} key={day} initial="hidden" animate="visible" variants={{
            hidden: {
                y: -50,
                opacity: 0
            },
            visible: {
                y: 0,
                opacity: 1,
                transition: {
                    delay: .2
                }
            },

        }} >
            {name}
        </motion.div> : <div className={styles.content}>{name}</div>}
    </>


    )
}

const ItemDate = ({ date, time, day, index, isAnimated }) => {
    return (
        <>
            {isAnimated ? <motion.div className={styles.content} initial="hidden" animate="visible" variants={{
                hidden: {
                    y: -50,
                    opacity: 0
                },
                visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        delay: .2
                    }
                },
            }}
                key={day} >
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

const ItemDetails = ({ details, day, index, isAnimated }) => {
    return (
        <>
            {isAnimated ?
                <motion.div className={styles.eventDetails} initial="hidden" animate="visible" variants={{
                    hidden: {
                        y: -50,
                        opacity: 0
                    },
                    visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            delay: .2
                        }
                    },
                }}
                    key={day} >
                    {details}
                </motion.div> : <div className={styles.eventDetails}>
                    {details}
                </div>}

        </>
    )
}
export { ItemName, ItemDate, ItemDetails }