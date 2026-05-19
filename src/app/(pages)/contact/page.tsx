import QuoteBannerWithLogos from '@/components/Banner'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <Contact/>
      <QuoteBannerWithLogos/>
      <Footer/>
    </div>
  )
}

export default page
