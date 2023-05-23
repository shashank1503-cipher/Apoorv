import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TrapAndDj from '@/components/TrapAndDj'
import Head from 'next/head'
import React from 'react'

const featured = () => {
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
       
        <Navbar isTransparent={true} />
            
        <TrapAndDj/>

        <Footer />
       
        </>
  )
}

export default featured