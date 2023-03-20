import EventDetails from "@/components/EventPage/EventDetails"
import EventHeading from "@/components/EventPage/EventHeading"
import OrganizerContainer from "@/components/EventPage/OrganizerContainer"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { events } from "@/data/Events"
import Head from "next/head"
import styles from '../../../styles/Home.module.css'
import eventBg from '../../../../public/eventBg.png'
import Image from "next/image"
import Gradient from "@/components/Gradients/Gradient"

export const getStaticPaths = async () => {
    const paths = events.map((event) => {
        return {
            params: { id: event.link },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const link = context.params.id

    const data = events.filter(function (el) {
        return el.link == link
    })
    return {
        props: {
            name: data[0].name,
            poster: data[0].poster,
            description: data[0].description,
            register: data[0].registration,
            date: data[0].date,
            time: data[0].time,
            organisers: data[0].organisers,
            tag: data[0].tag,
        },
    }
}

export default function Event({ name, poster, description, register, date, time, organisers, tag }) {
    console.log(name, poster, description, register, date, time, organisers, tag)
    return (<>
        <div className={styles.container}>
            <Head>
                <title>Apoorv - IIITK | {name}</title>
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
            <Navbar isTransparent={true} />
            <Gradient />
            <EventHeading
                title={name}
                content={tag}
                register={register}
                eventPoster={poster}

            ></EventHeading>
            <EventDetails
                description={description}
                date={date}
                time={time}
            />
            <OrganizerContainer organiser={organisers} />
        </div>
        <Footer />
    </>
    )
}