import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import abtimg from '../assets/night.jpg'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'

function About() {
    return (
        <div>
            <Navbar />
            <Hero
                cName='hero-abt'
                heroImg={abtimg}
                title='About'
                btnClass='hide'


            />
            <AboutUs/>
            <Footer/>
        </div>
    )
}

export default About
