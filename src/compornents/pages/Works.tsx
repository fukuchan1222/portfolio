import React from 'react';
import '../../styles/Works.css';


function Works() {
  return (
    <main>
      <p className='note'>※カードをクリックorタップするとデモサイトに飛びます。</p>
      <div className='works'>
        <article className='works__article'>
          <a href="https://glittering-treacle-057d89.netlify.app" className='works__link'>
            <div className='works__cont'>
              <img src="/images/todo-app.png" alt="Todoアプリの画像"  className='works__image'/>
              <p className='works__createTime'>2023/9/23</p>
              <h3 className='works__cont-title'>ReactとTypescriptを使ってTodoアプリ実装</h3>
              <p className='works__text'>
                ReactとTypescriptの勉強のために初心者でも簡単なTodoアプリを実装しました。
                ReactとTypescriptの基礎を学ぶことができました。
              </p>
            </div>
          </a>
        </article>
        <article className='works__article'>
          <a href="https://glittering-cucurucho-9d9d27.netlify.app" className='works__link'>
            <div className='works__cont'>
              <img src="/images/loginFormValidation-app.png" alt="ログインフォームバリデーションの画像"  className='works__image'/>
              <p className='works__createTime'>2023/9/24</p>
              <h3 className='works__cont-title'>ReactとTypescriptとZodを使ってログインフォームのバリデーション実装</h3>
              <p className='works__text'>
                ReactのhooksFormの使い方とZodの使い方両方学ぶことができました。
                Zodを使ったバリデーションはすごく簡単で、驚きました。
              </p>
            </div>
          </a>
        </article>
        <article className='works__article'>
          <a href="https://effulgent-haupia-5cd778.netlify.app" className='works__link'>
            <div className='works__cont'>
              <img src="/images/Pixabay-clone.png" alt=""  className='works__image'/>
              <p className='works__createTime'>2023/9/30</p>
              <h3 className='works__cont-title'>ReactとTypescriptを使ってPixabayクローンを実装</h3>
              <p className='works__text'>
                Reactとtypescriptを使ってAPIデータフィッチングとReactPagenateを使用して、
                ページネーションを実装しました。
              </p>
            </div>
          </a>
        </article>
      </div>
    </main>
  )
}

export default Works;