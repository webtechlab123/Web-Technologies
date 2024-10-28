// ./components/Contents.js
import React from 'react';
import img from './img.PNG'

function Contents() {
  return (
    <main style={{ padding: '40px', textAlign: 'center' ,backgroundColor: '#204c6a',flex :'1'}}>
      <section style={{ marginBottom: '40px' }}>
        <img src={img} alt="Team Password App" style={{ width: '100%', marginTop: '20px',align:'right' }} />
      </section>
    </main>
  );
}

export default Contents;