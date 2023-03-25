import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Contactimg from '../assets/2.jpg'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <div>
      <Navbar/>
      <Hero
                cName='hero-abt'
                heroImg={Contactimg}
                title='Contact'
                btnClass='hide'


            />
      <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Contact
