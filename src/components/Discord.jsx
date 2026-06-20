import React from 'react'

export default function Discord({invite,widget}){
  return (
    <section id="discord" className="section">
      <div className="container">
        <h2 className="section-title">Discord</h2>
        <p>Join our community for announcements, events and support.</p>
        <div style={{marginTop:12}}>
          <a className="btn btn-neon" href={invite} target="_blank" rel="noopener">Join Discord</a>
        </div>
        {widget ? (
          <div style={{marginTop:18}} dangerouslySetInnerHTML={{__html:`<iframe src="${widget}" width="100%" height="500" frameborder="0"></iframe>`}} />
        ) : null}
      </div>
    </section>
  )
}
