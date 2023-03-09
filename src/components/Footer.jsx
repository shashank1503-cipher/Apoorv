
import React from 'react';
import Logo from "../styles/logo.svg";
import Year from "../styles/2023.svg";
import styles from "../styles/Footer.module.css";


import {AiFillMail,AiFillLinkedin,AiFillTwitterCircle,AiFillFacebook} from 'react-icons/ai';

const Footer=()=> {
  return (
    <>
     <div className={styles.footer}>
      <div className={styles.footer_container}>
      <div className={styles.line} />
        <div className={styles.content}>
          <div className={styles.first}>
            <h1 className={styles.head} ><Logo/></h1>
            <p className={styles.footer_desc}>
              A fest to mirror the beautiful chaos of nature and keep you on
              your toes, stir your souls and spark your creative flair.
            </p>
          </div>
         
          <div className={styles.horizontal}></div>
         
          <div className={styles.second}>
            <div className={styles.foot_font}>APRIL</div>
            <div className={styles.foot_font}>18-22nd</div>
            <div className={styles.fontz}><Year/></div>
            <div className={styles.foot_font}>IIIT KOTTAYAM</div>
          </div>
          <div className={styles.horizontal}></div>
          <div className={styles.third}>
            <div className={styles.foot_font}>follow us</div>
            <div className={styles.icons}>
              <div><a target="_blank" rel="noreferrer" href='#'><AiFillMail className={styles.icon}/></a></div>
             <div> <a target="_blank" rel="noreferrer" href='#'><AiFillLinkedin className={styles.icon}/></a></div>
             <div> <a target="_blank" rel="noreferrer" href='#'><AiFillFacebook className={styles.icon}/></a></div>
             <div> <a target="_blank" rel="noreferrer" href='#'><AiFillTwitterCircle className={styles.icon}/></a></div>
            </div>
            <div className={styles.foot_font1} >+91 9370324791</div>
          <div className={styles.foot_font1}>+91 9326791283</div>
         <div className={styles.foot_font1} onClick={(e) => {window.location.href ='mailto:apoorv@iiitkottayam.ac.in';}}>apoorv@iiitkottayam.ac.in</div>
         <div className={styles.foot_font1} style={{marginTop:"1rem"}}>IIIT Kottayam, Pala, Kottayam-686635</div>
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
