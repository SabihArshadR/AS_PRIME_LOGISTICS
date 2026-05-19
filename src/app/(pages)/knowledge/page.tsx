import QuoteBannerWithLogos from '@/components/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Knowledge from '@/components/Knowledge'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <Knowledge/>
      <QuoteBannerWithLogos/>
      <Footer/>
    </div>
  )
}

export default page
