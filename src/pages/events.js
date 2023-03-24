import Navbar from "@/components/Navbar"
import EventIntro from "@/components/EventsList/EventIntro";
import EventListContainer from "@/components/EventsList/EventListContainer";
import Footer from "@/components/Footer";
import { ParallaxProvider } from 'react-scroll-parallax';
import Head from "next/head";


const Events = () => {
    return (
        <>
        <Head>
                <title>Apoorv - IIITK | Events </title>
                <meta
                    name="description"
                    content="Apoorv IIITK Techno Cultural Fest"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ParallaxProvider>
                <Navbar isTransparent={true} logoHide={true} />
                <EventIntro />
                <EventListContainer />
                <Footer />
            </ParallaxProvider>
        </>
    )
}

export default Events