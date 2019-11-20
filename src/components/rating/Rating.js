import React from 'react';

import './Rating.scss';
import starImg from '../../assets/images/star.png';

export default function Rating({ rating, ratingSize = 'medium', ratingColor = 'white', title }) {
  return (
    <div className="Rating">
      <img className="Rating__star" src={starImg} alt="rating" />
      <span className={`Rating__number--${ratingSize} text--${ratingColor}`}>{rating}</span>
      <p>{title}</p>
    </div>
  );
}
