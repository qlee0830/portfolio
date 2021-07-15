import React from "react";

export default function Languages() {
  return (
    <div className="info-general__languages">
      <h3>Languages</h3>
      {list.map((item) => (
        <h5>
          {item.percentage} {item.name}
        </h5>
      ))}
    </div>
  );
}

const list = [
  { name: "Vietnamese", percentage: 100 },
  { name: "English", percentage: 80 },
  { name: "Finnish", percentage: 70 },
];
