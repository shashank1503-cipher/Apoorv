
import React, { useEffect, useState } from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import { CollisionButton } from './Buttons/Button'

const Hero = () => {

    const [animation, setAnimation] = useState(true)

    function calculateCenter(image) {
        var rect1 = image.getBoundingClientRect();
        var x = rect1.left + rect1.width * 0.5;
        var y = rect1.top + rect1.height * 0.5;
        return { x: x, y: y }
    }

    function getDistance(x1, y1, x2, y2) {
        let y = x2 - x1;
        let x = y2 - y1;

        return Math.sqrt(x * x + y * y);
    }

    function distanceFromCenter(image, mouseX, mouseY) {
        let imageCenter = calculateCenter(image);
        return getDistance(imageCenter.x, imageCenter.y, mouseX, mouseY)
    }

    function adjustImage(image, mX, mY) {
        let distance = distanceFromCenter(image, mX, mY);
        let center = calculateCenter(image)

        let mxx = center.x + (mX - center.x)
        let myy = center.y + (mY - center.y)

        const baseScale = 1
        const maxScaling = 2;
        const scalingFactor = 1.5;

        const adjustedScaling = maxScaling - ((distance / 1000) * scalingFactor)
        const scaling = adjustedScaling >= baseScale ? adjustedScaling : baseScale

        image.style.transformOrigin = `${mxx}px ${myy}px`
        image.style.transform = `scale(${scaling})`
    }

    const func = (e) => {

        const mx = e.screenX;
        const my = e.screenY;
        console.log(e)

        const image = document.getElementById('img');
        adjustImage(image, mx, my)

    }

    const removeFunc = (e) => {
        const image = document.getElementById('img');
        image.style.transform = 'none';
        image.style.transformOrigin = 'center center';
    }

    useEffect(() => {

        const myInterval = setInterval(() => {
            setAnimation(!animation);
        }, 10000);

        return () => clearInterval(myInterval)

    })

    // useEffect(() => {
    //     console.log(animation)
    // }, [animation])

    return (
        <div className={styles.main}>
            <div className={styles.img_cont}
                onMouseMove={(e) => func(e)}
                onMouseLeave={(e) => removeFunc(e)}
            >
                <Image
                    // className={animation?styles.img_back:styles.img_back_1}
                    className={`${styles.img} ${animation ? styles.img_ani : ""}`}
                    src={"/heroBack.png"}
                    alt={"hero"}
                    width={450}
                    height={450}
                    id={"img"}

                    // text-align={"center"}
                    style={{
                        // background: 'red',
                        maxWidth: '100%',
                        height: '100%',
                        position: 'absolute',
                    }}
                />

                <Image
                    className={styles.img}
                    src={'/hero.png'}
                    alt={"hero"}
                    width={600}
                    height={600}
                    // text-align={"center"}
                    style={{
                        position: 'relative',
                        maxWidth: '100%',
                        height: '100%',
                        zIndex: 1,
                    }}
                />


            </div>
            <div className={styles.content}>
                <div className={styles.head}>
                    <h1>APOORV</h1>
                    <h1>The first of it&apos;s kind</h1>
                </div>
                <p>A fest that celebrates both the innumerous shades of our culture<br />
                    and the bluey horizons of technology with a tint of<br />
                    literature in it too</p>
                <div className={styles.buttonGroup}>
                    <CollisionButton style={{ marginTop: "1rem", marginBottom: "1rem", padding: "0.5rem" }}>Register Here!</CollisionButton>
                </div>
                <div className={styles.link}>
                    <div>ART</div>
                    <div>CULTURE</div>
                    <div>TALKS</div>
                    <div>HACKATHONS</div>
                </div>
            </div>

        </div>
    )
}

export default Hero