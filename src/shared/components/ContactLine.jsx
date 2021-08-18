import React from "react";

const ContactLine = ({ label, value }) => {
  return (
    <div className="line">
      <h5>{label}</h5>
      <p className="line-info">{value}</p>
    </div>
  );
};

export default ContactLine;
