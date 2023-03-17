import Image from 'next/image'
import styles from '../../styles/ContainerCard.module.css'
import { motion, useScroll } from 'framer-motion'
import React, { useEffect } from 'react'
const ContainerCard = (props) => {
    const dataDepth = props.dataDepth

    const isParallax = dataDepth !== undefined
    return (
        <li data-type={isParallax ? "parallax" : ""} data-depth={props.dataDepth} >
            <div className={styles.card} onClick={() => {
                window.location.href = `/event/${props.link}`
            }}  >
                <div className={styles.imageWrapper}>
                    <Image src={props.image} alt={props.alt} fill />
                </div>
                <div className={styles.divider}>
                    <hr />
                </div>
                <div className={styles.content}>
                    <h1>{props.title}</h1>
                    <p>{props.date}</p>
                    <p>{props.time}</p>
                </div>
            </div>
        </li>
    )
}

export default ContainerCard