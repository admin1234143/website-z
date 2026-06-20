import React from 'react'

const faqs = [
  {q:'How do I join the game?', a:'Open the Roblox group or click Play on the game page.'},
  {q:'How do crates work?', a:'Crates provide random weapons and cosmetics graded by rarity.'}
]

export default function FAQ(){
  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="section-title">FAQ</h2>
        <div className="faq-list">
          {faqs.map(f=> (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
