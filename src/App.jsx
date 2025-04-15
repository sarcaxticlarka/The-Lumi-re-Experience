import React from 'react'
import HeroSection from './components/HeroSection'
import "./App.css"
import AboutSection from './components/AboutSection'
import Explore from './components/Explore'  
import RSVPTicketingSystem from './components/RSVPTicketingSystem'  
import EventScroller from './components/EventScroller'
import Start from './components/Start'
import Experies from './components/Experies'
import Inspire from './components/Inspire'
import Footer from './components/Footer'
import HeartCursor from './components/HeartCursor()'

const App = () => {
  return (
    <div>
      <HeartCursor />
      <HeroSection />
      <AboutSection/>
      <Explore/>
      <RSVPTicketingSystem/>
      <Experies/>
      <EventScroller/>
 
      <Start/>
      <Inspire/>
      <Footer />

    </div>
  )
}

export default App