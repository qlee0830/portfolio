import React from 'react';

export default function BasicInfo() {
  const data = [
    {
      label: 'Residence',
      value: 'USA',
    },
    {
      label: 'City',
      value: 'Seattle',
    },
    {
      label: 'Age',
      value: '28',
    },
  ];
  const renderData = (data) => {
    if (!data || !data.length) return null;
    return data.map(({ label, value }) => (
      <div className="basic-info">
        <h4>{label}:</h4>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <div className="info-general__basic">
     {renderData(data)}
    </div>
  );
}
