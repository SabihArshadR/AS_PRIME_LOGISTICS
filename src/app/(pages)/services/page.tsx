import Header from '@/components/Header'
import React from 'react'

import Services from '@/components/Services'
import QuoteBannerWithLogos from '@/components/Banner'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Header/>
      <Services/>
      <QuoteBannerWithLogos/>
      <Footer/>
    </div>
  )
}

export default page
