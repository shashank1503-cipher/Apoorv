import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Team from '@/components/Teams'
import styles from '../styles/Teams.module.css'
import { ParallaxProvider } from 'react-scroll-parallax'

const team = () => {
    return (
        <>
            <Head>
                <title>Apoorv - IIITK | Team </title>
                <meta
                    name="description"
                    content="Apoorv IIITK Techno Cultural Fest"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <ParallaxProvider>
                    <Navbar isTransparent="true" />
                    <Team />
                </ParallaxProvider>
            </div>
            <Footer />
        </>
    )
}

export default team