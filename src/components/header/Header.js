import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import logoImg from '../../assets/images/da-logo.png';

function Header() {
  return (
    <header className="Header">
      <div className="Header__half">
        <Link className="Header__logo" to="/">
          <img src={logoImg} alt="logo" />
        </Link>
        <p className="Header__title">Платформа для аналитики и оценки предоставляемых услуг</p>
      </div>
      <div className="Header__half">
        <p>Состояние</p>
        <div className="Header__state">
          <div className="Header__state__dot" />
        </div>
      </div>
    </header>
  );
}

export default Header;
