import ContainerCard from '@/components/Cards/ContainerCard'
import Navbar from '@/components/Navbar'
import { events } from '@/data/Events'
import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/EventPage.module.css'
const Events = () => {

    const eventData = events

    useEffect(() => {
        function handleScroll() {
            const topDistance = window.pageYOffset;
            const layers = document.querySelectorAll("[data-type='parallax']");
            for (let i = 0; i < layers.length; i++) {
                const layer = layers[i];
                const depth = layer.getAttribute("data-depth");
                const movement = -(topDistance * (depth / 100));
                const translate3d = `translate3d(0, ${movement}px, 3px)`;
                layer.style["-webkit-transform"] = translate3d;
                layer.style["-moz-transform"] = translate3d;
                layer.style["-ms-transform"] = translate3d;
                layer.style["-o-transform"] = translate3d;
                layer.style.transform = translate3d;
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <Head>
                <title>Apoorv - IIITK</title>
                <meta
                    name="description"
                    content="Apoorv Indian Institute of Information Technology IIIT Kottayam Techno Cultural Fest"
                />
                <meta
                    property="og:title"
                    content="Apoorv Techno Cultural Fest IIIT Kottayam"
                />
                <meta
                    property="og:description"
                    content="Apoorv - Indian Institute of Information Technology (IIIT) Kottayam Techno Cultural Fest"
                />
                <meta
                    property="og:url"
                    content="https://apoorviiitk.co/"
                />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className={styles.container}>
                <h2>Events</h2>
                <ul className={styles.grid}>
                    {eventData.map((event, index) => {
                        return (
                            <ContainerCard key={event.id} image={event.poster} title={event.name} date={event.date} time={event.time} link={event.link} dataDepth={index % 3 === 0 ? "40" : index % 3 === 1 ? "30" : "20"} />
                        )
                    })}
                </ul>
            </div>
            <div className={styles.tabContainer}>
                <h2>Events</h2>
                <ul className={styles.grid}>
                    {eventData.map((event, index) => {
                        return (
                            <ContainerCard key={event.id} image={event.poster} title={event.name} date={event.date} time={event.time} link={event.link} dataDepth={index % 2 === 0 ? "40" : "20"} />
                        )
                    })}
                </ul>
            </div>
            <div className={styles.mobileContainer}>
                <h2>Events</h2>
                <ul className={styles.grid}>
                    {eventData.map((event, index) => {
                        return (
                            <ContainerCard key={event.id} image={event.poster} title={event.name} date={event.date} time={event.time} link={event.link} />
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Events