import React from 'react'

const items = [
  'Zombie Combat','Leveling System','Weapon Progression','Boss Battles','Crates & Loot','Multiple Worlds'
]

export default function Features(){
  return (
    <section id="features" className="section">
      <div className="container">
        <h2 className="section-title">Features</h2>
        <div className="grid">
          {items.map(i=> <div className="card" key={i}>{i}</div>)}
        </div>
      </div>
    </section>
  )
}
