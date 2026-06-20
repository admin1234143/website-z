import React from 'react'

export default function Hero({logo}){
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <img src={logo} alt="Z-Ascension" className="logo" />
        <h1 className="title">Z-Ascension</h1>
        <p className="subtitle">Fight relentless zombies, level up, collect weapons and conquer multiple worlds.</p>
        <div style={{display:'flex',gap:12}}>
          <a className="btn btn-primary" href="#features">Play Now</a>
          <a className="btn btn-neon" href="#discord">Join Discord</a>
        </div>
      </div>
    </section>
  )
}
