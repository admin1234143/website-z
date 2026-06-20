import React from 'react'

const weapons = ['Pistols','SMGs','Assault Rifles','Shotguns','Sniper Rifles','Legendary Weapons']

export default function Weapons(){
  return (
    <section id="weapons" className="section">
      <div className="container">
        <h2 className="section-title">Weapons</h2>
        <div className="grid">
          {weapons.map(w=> <div className="card" key={w}>{w}</div>)}
        </div>
      </div>
    </section>
  )
}
