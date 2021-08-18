import React from "react";

import AccountBoxIcon from "@material-ui/icons/AccountBox";

const ContactForm = () => {
  return (
    <div className="form">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <textarea className="message" type="text" placeholder="Message" />
      <button className="btn" onClick="">
        Send Message
      </button>
    </div>
  );
};

export default ContactForm;
