import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Worlds from './components/Worlds'
import Weapons from './components/Weapons'
import Team from './components/Team'
import Stats from './components/Stats'
import Discord from './components/Discord'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import CONFIG from './config'

export default function App(){
  return (
    <div className="app-root" data-theme="dark">
      <Navbar logoSrc="/logo.png" />
      <main>
        <Hero logo="/logo.png" />
        <Features />
        <Stats />
        <Worlds />
        <Weapons />
        <Team />
        <Discord invite={CONFIG.discordInvite} widget={CONFIG.discordWidgetUrl} />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
