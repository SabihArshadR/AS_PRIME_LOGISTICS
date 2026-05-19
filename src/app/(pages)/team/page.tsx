import QuoteBannerWithLogos from '@/components/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Team from '@/components/Team'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <Team/>
      <QuoteBannerWithLogos/>
      <Footer/>
    </div>
  )
}

export default page
