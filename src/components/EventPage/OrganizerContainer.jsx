import styles from '../../styles/Organizers.module.css'
import ContainerCard from '../Cards/ContainerCard'
import Contact from './Contact'
const OrganizerContainer = ({ organiser }) => {
    // const organiser = props.organiser
    console.log(organiser)
    return (
        <div className={styles.container}>
            <h1 className={styles.head}>The Organizers</h1>
            <p className={styles.desc}>
                Want more details related to this event, feel free to contact the
                Event Organiser.
            </p>
            <div className={styles.contactWrapper}>
                {organiser.map((item, index) => {
                    return (
                        <ContainerCard key={index} image={item.image} alt={item.name} subheading={item.alias} title={item.name} subtitles={[item.email, item.phoneNumber]} onHoverAnimation={'scale'} />
                    )
                })}
            </div>


        </div>
    )
}

export default OrganizerContainer