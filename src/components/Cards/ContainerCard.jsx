import Image from 'next/image'
import styles from '../../styles/ContainerCard.module.css'
import React, { useState } from 'react'
import { FaCaretRight } from 'react-icons/fa'
const ContainerCard = (props) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    const { image, gif, alt, subheading, title, subtitles, onHoverAnimation } = props


    return (
        <div className={styles.card} {...props}>
            <div className={`${styles.imageWrapper} ${onHoverAnimation === "scale" ? styles.animationScale : ''}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                {gif ? !isHovering ? <Image src={image} alt={alt} fill loading={'eager'} /> : <Image src={gif} alt={alt} fill loading={'eager'} /> : <Image src={image} alt={alt} fill />}
            </div>
            <div className={styles.divider}>
                <hr />
            </div>
            <div className={styles.content}>
                <p className={styles.alias}><FaCaretRight /> {subheading}</p>
                <h1>{title}</h1>
                {subtitles.map((subtitle, index) => {
                    return (
                        <p key={index}>{subtitle}</p>
                    )
                }
                )}
            </div>
        </div>

    )
}

export default ContainerCard