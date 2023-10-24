import React from 'react';
import '../../styles/skills.css';


function Github() {
  return (
    <main>
        <section className='skill-item'>
            <h2 className='skill-item__title'>github</h2>
            <div className='skill-item__images'>
              <img src="/images/github.png" alt="github ロゴマーク" className='skill-item__img'/>
            </div>
            <p>
                githubは2023年3月より使用しています。現職でも使用しており、
                プライベートでもgithubでのプロジェクトのバージョン管理やブランチを使った、
                チームでのコード管理なども理解しています。
            </p>
        </section>
    </main>
  )
}

export default Github;