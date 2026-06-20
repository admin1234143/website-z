import React from 'react'
import CONFIG from '../config'

export default function Stats(){
  const s = CONFIG.stats
  return (
    <section id="statistics" className="section">
      <div className="container">
        <h2 className="section-title">Statistics</h2>
        <div className="grid">
          <div className="card"><div style={{fontSize:22,fontWeight:800,color:'var(--accent-green)'}}>{s.players.toLocaleString()}</div><div style={{color:'var(--muted)'}}>Players</div></div>
          <div className="card"><div style={{fontSize:22,fontWeight:800,color:'var(--accent-green)'}}>{s.discord.toLocaleString()}</div><div style={{color:'var(--muted)'}}>Discord Members</div></div>
          <div className="card"><div style={{fontSize:22,fontWeight:800,color:'var(--accent-green)'}}>{s.updates}</div><div style={{color:'var(--muted)'}}>Updates</div></div>
          <div className="card"><div style={{fontSize:22,fontWeight:800,color:'var(--accent-green)'}}>{s.worlds}</div><div style={{color:'var(--muted)'}}>Worlds</div></div>
        </div>
      </div>
    </section>
  )
}
