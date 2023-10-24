import React from 'react';
import '../../styles/skills.css';


function Framework() {
  return (
    <main>
        <section className='skill-item'>
            <h2 className='skill-item__title'>React.js</h2>
            <div className='skill-item__images'>
              <img src="/images/react-logo.png" alt="Javascript ロゴマーク" className='skill-item__img'/>
            </div>
            <p>
                React.jsは、2023年8月から勉強を開始しました。それまでは正直jqueryと生のJavascriptを使用していましたが、
                フロントエンドエンジニアとしてフレームワークの知識と経験は必要不可欠であると知り勉強を始めました。
                現在は、React.jsとTypescriptを主に勉強し、フロントエンドエンジニアとしてのスキルを磨いております。
                まだ、経験は浅いですが、Reactの基本的な使い方はすでに理解しています。
                このポートフォリオもReactで作成しました。
            </p>
        </section>
    </main>
  )
}

export default Framework;