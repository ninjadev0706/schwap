import Head from 'next/head'
import React, { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MainBox from '@/components/MainBox'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import CountDownTimer from '@/components/Components/CountDownTimer';

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Head>
        <title>SCHWAP</title>
        <meta name="description" content="Schwap, a Trustless, Permissionless, and Sizable Decentralized OTC Market." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-200 h-screen flex flex-col justify-center pt-20">
        <Header />
        <MainBox />
        <Footer />
      </div>
    </>
  )
}
