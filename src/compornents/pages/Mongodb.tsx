import React from 'react';
import '../../styles/skills.css';

function Mongodb() {
  return (
    <main>
        <section className='skill-item'>
            <h2 className='skill-item__title'>MongoDB</h2>
            <div className='skill-item__images'>
              <img src="/images/mongodb.png" alt="mongodb ロゴマーク" className='skill-item__img'/>
            </div>
            <p>
                MongoDBは2023年9月よりnode.jsの勉強の際に使用しています。
                こちらについては最近勉強を始めたばかりなので、今後理解を深め使いこなせるようになりたいと思います。
            </p>
        </section>
    </main>
  )
}

export default Mongodb;