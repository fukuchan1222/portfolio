import React from 'react';
import '../../styles/skills.css';


function Htmlcss() {
  return (
    <main>
        <section className='skill-item'>
            <h2 className='skill-item__title'>HTML/CSS</h2>
            <div className='skill-item__images'>
              <img src="/images/html5.png" alt="HTML5 ロゴマーク" className='skill-item__img'/>
              <img src="/images/css3.png" alt="CSS3 ロゴマーク" className='skill-item__img'/>
            </div>
            <p>
              2020年4月よりwebサイトを作れるようになりたいと思い、HTML/CSSの勉強を始めました。
              HTMLについては記述方法から、各種タグまで理解しているつもりです。
              CSSにつきましても、通常のCSSの記述はもちろん、SCSSやCSS設計まで理解しています。
              CSS設計については、自分自身ではベーシックなBEMを採用しています。
              プロジェクトに応じて、OOCSSやSMACSSなども使用できるように理解を深めたいと思っています。
            </p>
        </section>
    </main>
  )
}

export default Htmlcss;