import React from 'react';
import '../../styles/skills.css';


function Javascript() {
  return (
    <main>
        <section className='skill-item'>
            <h2 className='skill-item__title'>Javascript</h2>
            <div className='skill-item__images'>
              <img src="/images/Javascript.png" alt="Javascript ロゴマーク" className='skill-item__img'/>
            </div>
            <p>
                Javascriptについては、HTMLとCSSの勉強を一通り終え、2021年ごろから勉強しました。
                変数の使い方や関数の使い方などJavascriptの基礎を覚えるのがとても大変でした。
                今では、APIでの非同期処理やWebサイトの動的なUI/UXの実装まで行えるようになりました。
                覚えるのが大変だった分、今ではJavascriptが一番好きです。
                生のJavascriptはもちろんですが、jqueryも使えます。
            </p>
        </section>
    </main>
  )
}

export default Javascript