import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
       <div className="h">
            <h1 className="h__logo">Fukuchi Yasuyuki</h1>
            <nav className='h__nav'>
                <ul className="h__list">
                    <li className='h__item'>
                        <Link to="/" className='h__link'>Top</Link>
                    </li>
                    <li className='h__item'>
                        <Link to="/Works" className='h__link'>Works</Link>
                    </li>
                    <li className='h__item'>
                        <Link to="/Contact" className='h__link'>Contact</Link>
                    </li>
                </ul>
            </nav>
       </div>
    </header>
  )
}

export default Header;