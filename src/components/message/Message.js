import React from 'react';

import './Message.scss';
import tsonLogo from '../../assets/images/tson-logo.png';

export default function Message({ text, title }) {
  return (
    <div className="Message">
      <div className="Message__logo">
        <img src={tsonLogo} alt="logo" />
      </div>
      <div className="Message__content">
        <span className="text--warning">{title}</span>
        <p className="Message__text">{text}</p>
      </div>
    </div>
  );
}
