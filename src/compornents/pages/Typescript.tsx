import React from 'react';
import '../../styles/skills.css';


function Typescript() {
  return (  
    <main>
        <section className='skill-item'>
            <h2 className='skill-item__title'>Typescript</h2>
            <div className='skill-item__images'>
              <img src="/images/ts-logo.png" alt="Typescript ロゴマーク" className='skill-item__img'/>
            </div>
            <p>
                Typescriptは、2023年8月から勉強を開始しました。それに伴いReact.jsも一緒に勉強しております。
                今後、Javascriptに置き換わって主流になっていくと思い、現在勉強しています。
                基本的なTypescirptの記述方法や、使い方や特徴は理解していますが、
                いろいろなWebアプリ開発を通して、もっと理解を深めていきたいと思っております。
            </p>
        </section>
    </main>
  )
}

export default Typescript;