import React from 'react';
import '../../styles/skills.css';


function Firebase() {
  return (
    <main>
        <section className='skill-item'>
            <h2 className='skill-item__title'>Firebase</h2>
            <div className='skill-item__images'>
              <img src="/images/firebase.png" alt="Firebase ロゴマーク" className='skill-item__img'/>
            </div>
            <p>
                FirebaseもMongoDBと同様に、node.jsの勉強の際に使用しています。
                こちらも今後理解を深め、使用していきたいと思います。
                特にauthの部分についてはすごく実用的であると思っています。
            </p>
        </section>
    </main>
  )
}

export default Firebase