import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../../styles/EventHeading.module.css'
import { CollisionButton } from '../Buttons/Button'
import ChakraUIGhostButton from '../Buttons/ChakraUIGhostButton'
const EventHeading = (props) => {
    let { register } = props;
    let applyWithDevfolio = false;
    if (register == "apply with devfolio") {
        applyWithDevfolio = true;
    }

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.Heading}>
                <h1>{props.title}</h1>
                <p >{props.content}</p>
                {!applyWithDevfolio ? (
                    <div>
                        <ChakraUIGhostButton colorScheme="purple" style={{ marginTop: "5%" }} onClick={() => {
                            window.open(props.register)
                        }}>Register here</ChakraUIGhostButton>
                    </div>)
                    : (
                        <div
                            className={"apply-button"}
                            data-hackathon-slug="apoorv-iiitk"
                            data-button-theme="light"
                            style={{ height: "44px", width: "312px" }}
                        ></div>)}
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
