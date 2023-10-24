import React from 'react';
import '../../styles/Top.css';
import { Link } from 'react-router-dom';

function Top() {
  return (
    <main>
        <div className="top">
            <section className='about'>
                <h2 className='about__title'>Fukuchi Yasuyuki</h2>
                <h3 className="about__type"> フロントエンドエンジニア</h3>
                <div className="about__prof">
                    <dl className='about__list'>
                        <div className='about__field'>
                            <dt className='about__item'>名前:</dt>
                            <dd className='about__cont'>福地 恭幸</dd>
                        </div>
                        <div className='about__field'>
                            <dt className='about__item'>生年月日：</dt>
                            <dd className='about__cont'>1987年生まれ</dd>
                        </div>
                        <div className='about__field'>
                            <dt className='about__item'>居住地：</dt>
                            <dd className='about__cont'>北海道札幌市</dd>
                        </div>
                        <div className='about__field'>
                            <dt className='about__item'>出身地：</dt>
                            <dd className='about__cont'>北海道伊達市</dd>
                        </div>
                        <div className='about__field'>
                            <dt className='about__item'>最終学歴：</dt>
                            <dd className='about__cont'>高卒</dd>
                        </div>
                        <div className='about__field'>
                            <dt className='about__item'>趣味：</dt>
                            <dd className='about__cont'>釣り、キャンプ、将棋、麻雀</dd>
                        </div>
                    </dl>
                    <img src="/images/sample.png" alt="プロフィール画像" className='about__image'/>
                </div>
                <p className="about__prof-text">
                        2020年4月からエンジニアを目指し、ブログサイトやYouTubeなどを使い、独学でプログラミングを学びました。
                        2023年3月から現在勤務しているコールセンターのコーポレートサイトの更新や編集、
                        自社サービスサイトの申込フォームのデザインから実装などを行っております。
                        実務経験は浅く、2023年8月からReactやtypescriptなども学んでおります。
                        今後は、フロントエンドエンジニアとしてのスキルを磨き、更にはバックエンドの知識やスキルも習得し、
                        フルスタックエンジニアになりたいと考え、日々勉強に励んでいます。
                    </p>
            </section>
            <section className="skill">
                <div className="skill__block">
                    <hr />
                    <h2 className="skill__title">Skills</h2>
                    <div className='skill__items'>
                        <button className='skill__item'>
                            <Link to="/Htmlcss" className='skill__link'>HTML/CSS</Link>
                        </button>
                        <button className='skill__item'>
                            <Link to="/Javascript" className='skill__link'>Javascript</Link>
                        </button>
                        <button className='skill__item'>
                            <Link to="/" className='skill__link'>typescript</Link>
                        </button>
                        <button className='skill__item'>
                            <Link to="/" className='skill__link'>React.js</Link>
                        </button>
                        <button className='skill__item'>
                            <Link to="/" className='skill__link'>Node.js</Link>
                        </button>
                        <button className='skill__item'>
                            <Link to="/" className='skill__link'>Figma</Link>
                        </button>
                        <button className='skill__item'>
                            <Link to="/" className='skill__link'>github</Link>
                        </button>
                        <button className='skill__item'>
                            <Link to="/" className='skill__link'>MONGODB</Link>
                        </button>
                        <button className='skill__item'>
                            <Link to="/" className='skill__link'>Firebase</Link>
                        </button>
                        <button className='skill__item'>
                            <Link to="/" className='skill__link'>Netlify</Link>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    </main>
  )
}

export default Top;