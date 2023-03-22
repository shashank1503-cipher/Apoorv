import styles from "../../styles/EventsIntro.module.css";
import Image from "next/image";
// import logo from "/logo.svg";
import downarrow from "../../assets/EventsPage/downarrow.png"

const EventIntro = () => {
    return (
        <div className = {styles.intro}>
            <div className = {styles.introContainer}>
                <div className = {styles.row1}>
                    <img src = {'/logo.svg'}
                        alt = "apoorv logo"
                        className = {styles.im}
                    />
                    <div className = {styles.textLogo}>apoorv</div>
                </div>
                <div className = {styles.row2}></div>
                <div className = {styles.row3}>
                    <div className = {styles.con1}>
                    Our brilliant events,
                    <div>
                    at the tip of your fingers.
                    </div>
                    </div>
                    <div className = {styles.con2}>
                    Check out the events we have available for Apoorv 23 &#8217; down below. 
                        <div>    
                        Click on any to register for them.
                        </div>
                    </div>
                </div>
            </div>
            <div className = {styles.arrow}>
                <Image 
                    src = {downarrow}
                    alt = "scroll down"
                    className = {styles.arIm}
                />
            </div>
        </div>    
    )
}

export default EventIntro