import React, { useEffect, useLayoutEffect } from 'react'
import styles from '../styles/ShowStoppers.module.css'
import Image from 'next/image'
import Trap from '../assets/band/trap_main_page_stopper.svg'
import { FaCaretRight } from 'react-icons/fa'
import TrapPos from '../assets/band/trap_poster_1.png'
import DjPos from '../assets/band/DJ_NIGHT_POSTER.png'
import { useRouter } from 'next/router'


const ShowStoppers = () => {

    const router = useRouter()
    const move = (e) => {
        const stopperCardCont = e.target.parentNode
        // console.log("CHECK THIS  ------------------")
        // console.log(stopperCardCont)
        // console.log("CHECK THIS  ------------------")
        const stopperCard = e.target
        // console.log(stopperCard)
    
        const mouseX = e.clientX - stopperCardCont.offsetLeft; 
        const mouseY = e.clientY - stopperCardCont.offsetTop; 
        const halfWidth = stopperCardCont.offsetWidth / 2; 
        const halfHeight = stopperCardCont.offsetHeight / 2; 
        
        // console.log("______")
        // console.log(halfWidth, mouseX)
        // console.log(halfHeight, mouseY)
        
        let tiltX = (mouseX - halfWidth) / 10; 
        let tiltY = (mouseY - halfHeight) / 10;

        const sub = 5;

        if(tiltY > sub)
            tiltY = sub

        if(tiltY < -sub)
            tiltY = -sub

        if(tiltX > sub)
            tiltX = sub
        if(tiltX < -sub)
            tiltX = -sub

        

        // console.log(tiltX, tiltY)

        stopperCard.style.transform = `rotateX(${-tiltY}deg) rotateY(${-tiltX}deg)`;
    }

    const moveBack = (e) => {
        const stopperCard = e.target
        console.log(stopperCard)
        stopperCard.style.transform = '';
    }

  return (
    <div
        className={styles.container}
    >
        <div className={styles.stopperBar}>
            The Showstoppers
        </div>

        <div
            className={styles.cardCont}
        >
            
            <div
                className={styles.stopperCardCont}
                id={'cardCont'}
                
                onClick={() => window.location.href = `/featured`}
            >
                <div className={styles.stopperCard}
                    onMouseMove={(e) => move(e)}
                    onMouseLeave={e => moveBack(e)}
                    id="card"
                >                    
                    <Image src={TrapPos} loading="eager"
                        fill
                    />

                    <div className={styles.data}>
                
                        <div
                            className={styles.name}
                        >T.R.A.P</div>

                        <div className={styles.time}>
                            <FaCaretRight className={styles.icon}/> April 8th, 8:00 PM
                        </div>

                    </div>

                </div>
            </div>
            <div
                className={styles.stopperCardCont}
                id={'cardCont'}
                
                onClick={() => window.location.href = `/featured`}
            >
                <div className={styles.stopperCard}
                    id="card"
                    onMouseMove={(e) => move(e)}
                onMouseLeave={e => moveBack(e)}
                >
                    
                    <Image src={DjPos} loading="eager"
                        fill
                    />

                    <div className={styles.data}>
                        <div
                            className={styles.name}
                        >DJ DHRUV</div>

                        <div className={styles.time}>
                            <FaCaretRight className={styles.icon}/> April 7th, 8:00 PM
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default ShowStoppers