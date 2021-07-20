import React from 'react';
import CircularProgressItem from './../components/CircularProgressItem';
export default function Languages() {
  return (
    <div className="info-general__languages">
      <h3>Languages</h3>
      <div className="lang-box">
        {list.map((item) => (
          <CircularProgressItem item={item} />
        ))}
      </div>
    </div>
  );
}

const list = [
  { name: 'Vietnamese', percentage: 100 },
  { name: 'English', percentage: 70 },
  { name: 'Japanese', percentage: 10 },
];
