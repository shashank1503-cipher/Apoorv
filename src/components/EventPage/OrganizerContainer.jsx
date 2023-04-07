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
                        <>
                        <ContainerCard key={index} gif={item.gif} image={item.image} alt={item.name} subheading={item.alias} title={item.name} subtitles={[item.email, item.phoneNumber]} onHoverAnimation={'scale'} />
                           {item.name==="Darisi Priyatham" ?<div style={{color:"black"}}>
                             QXBvb3J2Q1RGe3QzeHRfaGlnaDFpOXRpbjlfaXNfcjM0bGx5X2MwMGx9
                            </div>:<></>}
                        </>
                          
                    )
                })}
            </div>


        </div>
    )
}

export default OrganizerContainer