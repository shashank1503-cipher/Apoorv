import Image from 'next/image'
import styles from '../../styles/EventDetails.module.css'
import abc from '../../../public/img2.svg'

const EventDetails = (props) => {

    return (
        <div className={styles.main_div}>
            <div className={styles.wrapper}>
                <div className={styles.head} >
                    <h1>Apoorv, IIITk&apos;s<br></br>
                        techno-cultural fest,</h1><br></br>
                </div>
                <div className={styles.body}>
                    <p>
                        has been celebrating arts, heritage,music and lifestyle
                        since its inception in 2019, A myriad of events with
                        impressive and breathtaking performances has always
                        been the norm.<br></br>
                        It&apos;s the amalgamation of mind gruelling competitions,
                        thought proving expert talks and workshops that
                        stimulate your cerebral matter!<br></br><br></br>
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
                        <h1>21 Feb</h1>
                    </div>
                    <div className={styles.divider}>
                        <hr />
                    </div>
                    <div className={styles.time}>
                        <h1>10:00 AM</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetails
