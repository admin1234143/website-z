import React from 'react'

const worlds = ['Forest','Mountains','Hell','Nuclear Wasteland','Hacker Dimension','Godly Realm']

export default function Worlds(){
  return (
    <section id="worlds" className="section">
      <div className="container">
        <h2 className="section-title">Worlds</h2>
        <div className="grid">
          {worlds.map(w=> <div className="card" key={w}>{w}</div>)}
        </div>
      </div>
    </section>
  )
}
