import QuoteBannerWithLogos from '@/components/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import News from '@/components/News'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <News/>
      <QuoteBannerWithLogos/>
      <Footer/>
    </div>
  )
}

export default page
