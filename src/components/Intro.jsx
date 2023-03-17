import React, { useEffect, useState } from 'react'
import styles from '../styles/Intro.module.css'
import Image from 'next/image';
import im1 from "../../public/static/images/im1.png"
import im2 from "../../public/static/images/im2.png"
import im3 from "../../public/static/images/im3.png"
import im4 from "../../public/static/images/im4.png"
import im5 from "../../public/static/images/im5.png"
import im6 from "../../public/static/images/im6.png"

const Intro = () => {
    return (
        <div className = {styles.container}>
            <div className = {styles.col}>
                <div className = {styles.slideDown} style = {{right: "55%"}}>
                    <Image src = {im1} 
                    alt = "A"
                    width = {100}
                    height = {100}/>
                </div>
                <div className = {styles.slideRight} style = {{top: "52%"}}>
                    <Image src = {im4} 
                    alt = "O"
                    width = {100}
                    height = {100}/>
                </div>
            </div>
            <div className = {styles.col}>
                <div className = {styles.fadeIn} style = {{bottom: "52%"}}>
                    <Image src = {im2} 
                    alt = "P"
                    width = {100}
                    height = {100}/>
                </div>
                <div className = {styles.fadeIn} style = {{top: "52%"}}>
                    <Image src = {im5} 
                    alt = "R"
                    width = {100}
                    height = {100}/>
                </div>
            </div>
            <div className = {styles.col}>
                <div className = {styles.slideLeft} style = {{bottom: "52%", left: "55%"}}>
                    <Image src = {im3} 
                    alt = "O"
                    width = {100}
                    height = {100}/>
                </div>
                <div className = {styles.slideUp} style = {{top: "52%", left: "55%"}}>
                    <Image src = {im6} 
                    alt = "V"
                    width = {100}
                    height = {100}/>
                </div>
            </div>
        </div>
    )
}

export default Intro
