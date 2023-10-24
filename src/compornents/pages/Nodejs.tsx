import React from 'react';
import '../../styles/skills.css';


function Nodejs() {
  return (
    <main>
        <section className='skill-item'>
            <h2 className='skill-item__title'>node.js</h2>
            <div className='skill-item__images'>
              <img src="/images/nodejs.png" alt="Javascript ロゴマーク" className='skill-item__img'/>
            </div>
            <p>
                nodejsは9月より勉強を始めました。Reactを勉強していく中で、
                フルスタックのWebアプリも実装してみたいと思ったのがきっかけです。
                現在は、まだ実用レベルには達していないかと思いますが、
                今後フロントエンドの勉強と共に、サーバーサイドについても理解を深めていきたいと思っています。
            </p>
        </section>
    </main>
  )
}

export default Nodejs;