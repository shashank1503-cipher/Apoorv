import ComingSoon from '@/components/ComingSoon'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Description from '@/components/Description'

import Hero from '@/components/Hero'
import Sponsor from '@/components/Sponsor'
import Footer from '@/components/Footer'
import Speakers from '@/components/Speakers'
import { CollisionButton } from '@/components/Buttons/Button'
import Navbar from '@/components/Navbar'
import TimelineNew from '@/components/TimelineNew'
// import Intro from '@/components/Intro'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [show, setShow] = useState(true)
  const [height, setHeight] = useState('100vh')
  useEffect(() => {
    if (router.asPath !== '/') {
      setShow(false)
      setHeight(null)
    } else {
      setShow(true)
      const timer = setTimeout(() => {
        setShow(false)
        setHeight(null)
      }, 4175)
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = 'auto'
    }
  }, [show])
  return (
    <>

      <div className={styles.container} style={{ height: height }}>
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
        <Hero />
        <Description />
        <Speakers />
        <TimelineNew />
        <Sponsor />
        <Footer />
      </div>
    </>
  )
}
