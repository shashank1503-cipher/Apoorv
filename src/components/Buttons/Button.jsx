import React from 'react'
import styles from '../../styles/Button.module.css'


const Button = (props) => {

    let { children, colorScheme } = props

    return (
        <div className={`${styles.button} ${colorScheme === "purple" ? styles.purple : colorScheme === "yellow" ? styles.yellow : ""} `}  {...props}>{children}</div>
    )
}

export { Button }