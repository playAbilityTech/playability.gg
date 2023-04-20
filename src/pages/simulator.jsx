import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import FaceExpressionDetector from '@/components/simulator/FaceExpressionDetector'
import Mouse2Stick from '@/components/simulator/Mouse2Stick'
import Voice from '@/components/simulator/Voice'



export default function Home() {
  return (
    <>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
      <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6"></div>
    </div>
      <div class="p-8 bg-black-300">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            <div class="p-4 bg-cyan-400 rounded-md flex items-center justify-center">
            <FaceExpressionDetector />
            </div>
            <div class="p-4 bg-cyan-400 rounded-md flex items-center justify-center">
            <Mouse2Stick />
            </div>
            <div class="p-4 bg-cyan-400 rounded-md flex items-center justify-center">
            <Voice />
            </div>
            <div class="p-4 bg-cyan-400 rounded-md flex items-center justify-center">

            </div>
        </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
