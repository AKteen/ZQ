import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Header/navbar.jsx'
import Footer from './components/Footer/footer.jsx'
import Hero from './components/Hero/hero.jsx'
import About from './components/About/about.jsx'
import Service from './components/Services/services.jsx'
import Contact from './components/ContactUs/contact.jsx'
import Youtube from './components/youtubeapi.jsx'
import Location from './components/Location/location.jsx'

// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Location />
      <Hero />
      <About />
      <Service />
      <Contact />
      <Youtube />

      
      <Footer />
    </>
  )
}

export default App

