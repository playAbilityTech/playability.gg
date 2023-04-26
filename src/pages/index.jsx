import Head from 'next/head'
import React from 'react';
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Hero2  from '@/components/Hero2'
import Testimonials from '@/components/Testimonials'

import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'


export default function Home() {
  return (
    <>
      <Head>
        <title>playAbility - Make gaming accessible to everyone</title>
        <meta
          name="description"
          content="Make gaming accessible to everyone"
        />
      </Head>
      <Header />
      <main>
        <Hero2 />
        <Testimonials />
        <CallToAction />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
