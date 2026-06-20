import React from 'react'
import CONFIG from '../config'

export default function Team(){
  return (
    <section id="team" className="section">
      <div className="container">
        <h2 className="section-title">Team</h2>
        <div className="team-grid">
          {CONFIG.team.map(m=> (
            <div className="team-card" key={m.name}>
              <img className="team-avatar" src={m.avatar} alt={m.name} />
              <div>
                <div className="team-name">{m.name} <span className="team-rank">{m.rank}</span></div>
                <div className="team-desc">{m.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
