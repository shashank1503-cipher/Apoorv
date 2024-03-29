
import React from 'react';
import logo from '../assets/apoorv_logo.svg';
import year from '../assets/2023.svg';
import styles from '../styles/Footer.module.css';
import { AiFillMail, AiFillLinkedin ,AiFillInstagram } from 'react-icons/ai';
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
                <Image alt="image" src={logo} /></div>
              <div className={styles.footer_desc}>
                A fest that celebrates both the innumerous shades of
                our culture and the bluey horizons of technology
                with a tint of literature in it too
              </div>
            </div>

            <div className={styles.horizontal}></div>

            <div className={styles.second}>
              <div className={styles.foot_font2}>April</div>
              <div className={styles.foot_font2} >6th-8th</div>
              <div className={styles.fontz}><Image src={year} alt="image"/></div>
              <div className={styles.foot_font}>IIIT KOTTAYAM </div>
            </div>
            <div className={styles.horizontal}></div>
            <div className={styles.third}>
              <div className={styles.foot_font}>follow us</div>
              <div className={styles.icons}>
                <div><a target="_blank" rel="noreferrer" href='mailto:apoorv@iiitkottayam.ac.in'><AiFillMail className={styles.icon} /></a></div>
                <div> <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/company/apoorv-iiit-kottayam/'><AiFillLinkedin className={styles.icon} /></a></div>
                <div> <a target="_blank" rel="noreferrer" href='https://instagram.com/apoorv_iiitk?igshid=ZDdkNTZiNTM'><AiFillInstagram className={styles.icon} /></a></div>
              </div>
              {/* <div className={styles.foot_font1} >+91 9370324791</div>
          <div className={styles.foot_font1}>+91 9326791283</div> */}
              <div className={styles.foot_font1} onClick={(e) => { window.location.href = 'mailto:apoorv@iiitkottayam.ac.in'; }}>apoorv@iiitkottayam.ac.in</div>
              <div className={styles.foot_font1} style={{ marginTop: "1rem" }}>IIIT Kottayam,Valavoor</div>
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
