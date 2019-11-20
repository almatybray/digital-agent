import React from 'react';

import './Status.scss';

export default function Status({ text, type = 'success' }) {
  return <p className={`Status Status--${type}`}>{text}</p>;
}
