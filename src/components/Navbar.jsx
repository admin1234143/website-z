import React from 'react'

export default function Navbar({logoSrc}){
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a className="brand" href="#home"><img src={logoSrc} alt="logo"/></a>
        <nav>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#worlds">Worlds</a>
            <a href="#weapons">Weapons</a>
            <a href="#team">Team</a>
            <a href="#faq">FAQ</a>
          </div>
        </nav>
        <div className="nav-cta">
          <a className="btn btn-neon" href="#discord">Join Discord</a>
        </div>
      </div>
    </header>
  )
}
