import ComingSoon from '@/components/ComingSoon'
import Timeline from '@/components/Timeline'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Description from '@/components/Description'

export default function Home() {
  return (
    <>
      <Description/>
      <Head>
        <title>Apoorv 2k23</title>
        <meta name="description" content="Apoorv IIITK's Techno Cultural Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ComingSoon /> */}
      <Timeline/>
    </>
  )
}
