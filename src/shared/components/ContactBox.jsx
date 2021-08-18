import React from "react";

import ContactLine from "./ContactLine";

const ContactBox = ({ firstLabel, firstValue, secondLabel, secondValue }) => {
  return (
    <div className="box">
      <ContactLine label={firstLabel} value={firstValue} />
      <ContactLine label={secondLabel} value={secondValue} />
    </div>
  );
};

export default ContactBox;
