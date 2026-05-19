import About from '@/components/About'
import QuoteBannerWithLogos from '@/components/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <About/>
      <QuoteBannerWithLogos/>
      <Footer/>
    </div>
  )
}

export default page
