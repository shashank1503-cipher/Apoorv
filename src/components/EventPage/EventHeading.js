import Image from 'next/image'
import styles from '../../styles/EventHeading.module.css'
import { Button } from '../Buttons/Button'
import ChakraUIGhostButton from '../Buttons/ChakraUIGhostButton'
const EventHeading = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.Heading}>
                <h1>{props.title}</h1>
                <p >{props.content}</p>
                <div>
                    <Button colorScheme="purple" style={{ marginTop: "5%" }}> Register here</Button>
                </div>
            </div>
            <div className={styles.image}>
                {props.eventPoster && (
                    <Image
                        src={props.eventPoster}
                        alt="Event Poster"
                        priority={true}
                        height="300"
                        width="300"
                    />
                )}
            </div>
        </div>
    )
}

export default EventHeading
