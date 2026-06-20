import React from 'react'
import CONFIG from '../config'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>© {new Date().getFullYear()} Z-Ascension</div>
        <div style={{display:'flex',gap:10}}>
          <a href={CONFIG.socials.discord} target="_blank" rel="noopener">Discord</a>
          <a href={CONFIG.socials.roblox} target="_blank" rel="noopener">Roblox</a>
        </div>
      </div>
    </footer>
  )
}
