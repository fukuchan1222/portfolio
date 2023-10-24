import React from 'react';
import '../../styles/skills.css';

function Netlify() {
  return (
    <main>
        <section className='skill-item'>
            <h2 className='skill-item__title'>Netlify</h2>
            <div className='skill-item__images'>
              <img src="/images/netlify-logo.png" alt="Netlify ロゴマーク" className='skill-item__img'/>
            </div>
            <p>
                Netlifyは2023年9月から使用しています。
                Reactで作成したWebアプリはすべてNetlifyでデプロイしています。
            </p>
        </section>
    </main>
  )
}

export default Netlify;