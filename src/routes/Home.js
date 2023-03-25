import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Heroimg from '../assets/12.jpg'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

function Home() {

  return (
    <div>
      <Navbar/>
      <Hero
      cName='hero'
      heroImg={Heroimg}
      title='Your Journey Your Destination'
      text='Choose Your Favourite Destination'
      url='/'
      btnClass='show'
      btnText='Travel Plan'
    
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </div>
  )
}

export default Home
