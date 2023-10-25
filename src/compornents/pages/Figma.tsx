import React from 'react';
import '../../styles/skills.css';

function Figma() {
  return (
    <main>
        <section className='skill-item'>
            <h2 className='skill-item__title'>figma</h2>
            <div className='skill-item__images'>
              <img src="/images/Figma.png" alt="Figma ロゴマーク" className='skill-item__img'/>
            </div>
            <p>
                figmaは2023年3月より使用しています。現職でのデザインツールとしてもfigmaを使用しており、
                プライベートでもWebデザイン制作の際に使用しております。Webデザインは正直あまり得意ではないですが、
                デザインの方も勉強していきたいと思っております。以前はPhotshopを使用していましたが、
                figmaは無料で利用でき、またチームプロジェクトにも向いているため、
                使い方をマスターしたいと思っております。
            </p>
        </section>
    </main>
  )
}

export default Figma;