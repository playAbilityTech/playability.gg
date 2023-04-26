import Head from 'next/head'
import React from 'react';
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero }  from '@/components/Hero'
import CTA from '@/components/CTA';
import Hero3 from '@/components/Hero3';





export default function Home() {
  return (
    <>
      <Head>
        <title>playAbility - Rendre le jeu video accessible à tout le monde</title>
        <meta
          name="description"
          content="Une clé usb bluetooth qui permet de jouer à Mario Kart avec son fauteuil roulant et sa voix."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        {/* <Hero3 /> */}
        <CTA />
        {/* <Faqs /> */}

      </main>
      <Footer />
    </>
  )
}
