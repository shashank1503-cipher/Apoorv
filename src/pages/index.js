import ComingSoon from '@/components/ComingSoon'
import Timeline from '@/components/Timeline'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Description from '@/components/Description'

import Hero from '@/components/Hero'
import Sponsor from '@/components/Sponsor'
import Footer from '@/components/Footer'
import Speakers from '@/components/Speakers'
import { CollisionButton } from '@/components/Buttons/Button'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Apoorv 2k23</title>
        <meta name="description" content="Apoorv IIITK's Techno Cultural Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Hero/>
      <Description />
      {/* <ComingSoon /> */}
      <Timeline />
      <Speakers/>
      <Sponsor/>
      <Footer/>
    </>
  )
}
