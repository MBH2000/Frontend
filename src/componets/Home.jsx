import React , { useEffect, useState } from 'react'
import Testimonal from './home/testimonal/Testimonal'
import AboutCard from './about/AboutCard'
import HAbout from './home/HAbout'
import Footer from './common/footer/Footer'



const Home = () => {
  return (
    <>
<HAbout />
<AboutCard />
      
      <Testimonal />
     <Footer/>
    
  </>
  )
}

export default Home