import React from 'react'
import styles from '../../styles/Button.module.css'


const CollisionButton = (props) => {

    let { children } = props

    return (
        <div className={styles.button} onClick={() => { window.open("https://unstop.com/festival/apoorv-indian-institute-of-information-technology-iiit-kottayam-118308", "_blank") }} {...props}>{children}</div>
    )
}

export { CollisionButton }