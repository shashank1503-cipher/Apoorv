import styles from '../../styles/EventDetails.module.css'
import Contact from './Contact'
const OrganizerContainer = ({ organiser }) => {
    // const organiser = props.organiser
    return (
        <div className={styles.Evecont}>
            <h1 className={styles.hdn1}>Contact the Organizers</h1>
            <p className={styles.desc}>
                Want more details related to this event, feel free to contact the
                Event Organiser.
            </p>
            <div className={styles.contactWrapper}>
                {organiser.map((val) => (
                    <Contact
                        key={val.key}
                        name={val.name}
                        email={val.email}
                        phone={val.phoneNumber}
                    />))};

            </div>


        </div>
    )
}

export default OrganizerContainer