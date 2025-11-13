import React from 'react'
import ContactHeroSection from '../../components/ContactHero'
import ContactSection from '../../components/home/Contact'
import ContactMap from '../../components/ContactMap'

function Contact() {
  return (
    <div>
      <ContactHeroSection />
      <div id="contact-form">
        <ContactSection />
      </div>
      <ContactMap />
    </div>
  )
}

export default Contact