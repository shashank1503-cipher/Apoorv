import styles from '../../styles/ChakraUIButton.module.css'
const ChakraUIGhostButton = (props) => {
    let { children } = props
    let { colorScheme } = props
    return (

        <div className={`${styles.button} ${colorScheme === "purple" ? styles.purple : colorScheme === "yellow" ? styles.yellow : ""} `} {...props}>asdasd</div>
    )
}

export default ChakraUIGhostButton