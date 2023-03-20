import React from 'react'
import styles from '../../styles/Button.module.css'


const CollisionButton = (props) => {

    let { children } = props

    return (
        <div className={styles.button} {...props}>{children}</div>
    )
}

export { CollisionButton }