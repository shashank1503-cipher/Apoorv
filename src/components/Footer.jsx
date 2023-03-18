
import React from 'react';
import logo from '../assets/apoorv_logo.svg';
import year from '../assets/2023.svg';
import styles from '../styles/Footer.module.css';
import {AiFillMail,AiFillLinkedin,AiFillTwitterCircle,AiFillFacebook} from 'react-icons/ai';
import Image from 'next/image'


const Footer = () => {
  return (
    <>
     <div className={styles.footer}>
      <div className={styles.footer_container}>
      <div className={styles.line} />
        <div className={styles.content}>
          <div className={styles.first}>
            <div className={styles.head} >
                <Image src={logo} /></div>
            <div className={styles.footer_desc}>
              A fest to mirror the beautiful chaos of nature and keep you on
              your toes, stir your souls and spark your creative flair.
            </div>
          </div>
         
          <div className={styles.horizontal}></div>
         
          <div className={styles.second}>
            <div className={styles.foot_font2}>April</div>
            <div className={styles.foot_font2} >18-22nd</div>
            <div className={styles.fontz}><Image src={year}/></div>
            <div className={styles.foot_font}>IIIT KOTTAYAM </div>
          </div>
          <div className={styles.horizontal}></div>
          <div className={styles.third}>
            <div className={styles.foot_font}>follow us</div>
            <div className={styles.icons}>
              <div><a target="_blank" rel="noreferrer" href='mailto:apoorv@iiitkottayam.ac.in'><AiFillMail className={styles.icon}/></a></div>
             <div> <a target="_blank" rel="noreferrer" href=''><AiFillLinkedin className={styles.icon}/></a></div>
             <div> <a target="_blank" rel="noreferrer" href='#'><AiFillFacebook className={styles.icon}/></a></div>
             <div> <a target="_blank" rel="noreferrer" href='#'><AiFillTwitterCircle className={styles.icon}/></a></div>
            </div>
            {/* <div className={styles.foot_font1} >+91 9370324791</div>
          <div className={styles.foot_font1}>+91 9326791283</div> */}
         <div className={styles.foot_font1} onClick={(e) => {window.location.href ='mailto:apoorv@iiitkottayam.ac.in';}}>apoorv@iiitkottayam.ac.in</div>
         <div className={styles.foot_font1} style={{marginTop:"1rem"}}>IIIT Kottayam,Valavoor</div>
         <div className={styles.foot_font1}> Pala, Kottayam-686635</div>
        <div className={styles.foot_font1}>Kerala, India</div>

          </div>
        </div>
        <div className={styles.line1} />
      </div>
      </div> 
    </>
  )
}

export default Footer
