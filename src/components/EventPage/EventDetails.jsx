import Image from 'next/image'
import styles from '../../styles/EventDetails.module.css'
import abc from '../../../public/img2.svg'

const EventDetails = (props) => {

    return (
        <div className={styles.main_div}>
            <div className={styles.wrapper}>
                <div className={styles.head} >
                    <h1>Details</h1>
                </div>
                <div className={styles.body} style={{ whiteSpace: "pre-line" }}>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
            <div className={styles.img}>
                <Image
                    src={abc}
                    alt={"image"}
                    fill
                />
                <div className={styles.after}>
                    <div className={styles.date}>
                        <h1>{props.date}</h1>
                    </div>
                    <div className={styles.divider}>
                        <hr />
                    </div>
                    <div className={styles.time} style={{ whiteSpace: "pre-line" }}>
                        <h1>{props.time}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetails
