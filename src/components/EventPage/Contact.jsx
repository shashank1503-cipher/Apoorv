import styles from '../../styles/EventDetails.module.css'

const Contact = (props) => {
    return (
        <div className={styles.contact}>
            <p >
                {props.name}
                <br />
                {props.email}
                <br />
                {props.phone}

            </p>
            <hr />
        </div>
    )
}

export default Contact
