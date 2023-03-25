import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Serviceimg from '../assets/night.jpg'
import Footer from '../components/Footer'
import Trip from '../components/Trip'

function Service() {
  return (
    <div>
      <Navbar/>
      <Hero
                cName='hero-abt'
                heroImg={Serviceimg}
                title='Service'
                btnClass='hide'


       />
       <Trip/>
        <Footer/>
    </div>
  )
}

export default Service
