import React from 'react';
import '../../styles/Contact.css';

function Contact() {
  return (
    <main>
      <section className='contact'>
        <p className='note'>※現在こちらからメールを送信することができません。</p>
        <h2 className='contact__title'>お問い合わせはこちら</h2>
        <div className='contact__block'>
          <form className='contact__form'>
            <div className='contact__form-filed'>
              <label htmlFor="name" className='contact__form-label'>NAME</label>
              <input type="text" id='name' className='contact__form-input'/>
            </div>
            <div className='contact__form-filed'>
              <label htmlFor="email" className='contact__form-label'>EMAIL</label>
              <input type="email" id='email' className='contact__form-input'/>
            </div>
            <div className='contact__form-filed'>
              <label htmlFor="message" className='contact__form-label'>MESAAGE</label>
              <textarea id='message' className='contact__form-textarea'></textarea>
            </div>
            <button type='submit' className='contact__submit'>送信する</button>
          </form>
          <section className='contact__privacy'>
            <h3 className='contact__privacy-title'>プライバシーポリシー</h3>
            <p className='contact__privacy-text'>
              当サイトでは、お問い合わせいただく際に、お名前・メールアドレスを送信していただいております。
              名前、メールアドレスにつきましては、お問い合わせに対しご返信させていただくために必要となりますため、
              ご了承いただきますようお願いいたします。いただきましたお名前、メールアドレスにつきましては、
              問合せに対する返信以外の目的には使用しないことをお約束いたします。
            </p>
          </section>
        </div>
        
      </section>
    </main>
  )
}

export default Contact