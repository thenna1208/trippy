import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Signimg from '../assets/2.jpg'

function SignUp() {
  return (
    <div>
      <Navbar/>
      <Hero
      cName='hero-signup'
      heroImg={Signimg}
      title='Sign-Up'
      btnClass='hide'
      />
    </div>
  )
}

export default SignUp
