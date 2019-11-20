import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Card.scss';
import arrowImg from '../../assets/images/right-arrow.png';

export default function Card({ title, link, tabs, children, type }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={`Card ${type ? `Card--${type}` : ''}`}>
      <div>
        <p className="Card__title">
          {title}
          {link && (
            <Link to={link} className="Card__title__link">
              <img src={arrowImg} alt="link arrow" />
            </Link>
          )}
        </p>
        {tabs && (
          <div className="Card__tabs">
            {tabs.map((tab, index) => (
              <span
                className={`Card__tabs__item ${activeTab === index ? 'text--warning' : ''} `}
                onClick={() => setActiveTab(index)}
                key={index}
              >
                {tab}
              </span>
            ))}
          </div>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}
