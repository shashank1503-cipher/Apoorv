import React from 'react'
import styles from '../styles/Timeline.module.css'
import { motion } from 'framer-motion'

const ItemName = ({ name, day, index }) => {
    return (
        <motion.div className={styles.content} key={day} initial="hidden" animate="visible" variants={{
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
        </motion.div>

    )
}

const ItemDate = ({ date, day, index }) => {
    return (
        <motion.div className={styles.content} initial="hidden" animate="visible" variants={{
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
        </motion.div>

    )
}

const ItemDetails = ({ details, day, index }) => {
    return (
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
        </motion.div>
    )
}
export { ItemName, ItemDate, ItemDetails }