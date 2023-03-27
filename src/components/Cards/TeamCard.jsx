import Image from 'next/image'
import styles from '../../styles/ContainerCard.module.css'
import React, { useState } from 'react'
import { FaCaretRight, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
const TeamCard = (props) => {
    const { image, gif, alt, subheading, title, socials, onHoverAnimation } = props
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    const socialIconMap = {
        "linkedin": <FaLinkedin />,
        "github": <FaGithub />,
        "twitter": <FaTwitter />,
        'instagram': <FaInstagram />,
        'facebook': <FaFacebook />,
        'youtube': <FaYoutube />,
    }
    return (
        <div className={styles.card}>
            <div className={`${styles.imageWrapper} ${onHoverAnimation === "scale" ? styles.animationScale : ''}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                {gif ? !isHovering ? <Image src={image} alt={alt} fill loading={'eager'} /> : <Image src={gif} alt={alt} fill loading={'eager'} /> : <Image src={image} alt={alt} fill />}
            </div>

            <div className={styles.divider}>
                <hr />
            </div>
            <div className={styles.content}>
                <p className={styles.alias}><FaCaretRight /> {subheading}</p>
                <h1>{title}</h1>
                <div className={styles.socials}>
                    {Object.keys(socials).map((key, index) => {
                        return (
                            <a key={index} href={socials[key]} target="_blank" rel="noreferrer">
                                <div className={styles.social}>
                                    {socialIconMap[key]}
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default TeamCard