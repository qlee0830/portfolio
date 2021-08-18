import React from "react";

import ContactBox from "../shared/components/ContactBox";
import ContactForm from "../shared/components/ContactForm";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

export default function Contacts() {
  const info = [
    {
      label: "Country:",
      value: "USA",
    },
    {
      label: "City:",
      value: "Seattle",
    },
    {
      label: "LinkedIn:",
      value: (
        <a href="https://www.linkedin.com/in/quoc-phung-549b1a16b/">
          <ArrowRightAltIcon />
        </a>
      ),
    },
    {
      label: "Github:",
      value: (
        <a href="https://github.com/qlee0830">
          <ArrowRightAltIcon />
        </a>
      ),
    },
    {
      label: "Email:",
      value: "quocphung308@gmail.com",
    },
    {
      label: "Phone:",
      value: "(206)-582-8750",
    },
  ];

  return (
    <div className="contacts">
      <h3>Contact Information</h3>
      <div className="contacts-boxes">
        <ContactBox
          firstLabel={info[0].label}
          firstValue={info[0].value}
          secondLabel={info[1].label}
          secondValue={info[1].value}
        />
        <ContactBox
          firstLabel={info[2].label}
          firstValue={info[2].value}
          secondLabel={info[3].label}
          secondValue={info[3].value}
        />
        <ContactBox
          firstLabel={info[4].label}
          firstValue={info[4].value}
          secondLabel={info[5].label}
          secondValue={info[5].value}
        />
      </div>
      <h3>Get In Touch</h3>
      <ContactForm />
    </div>
  );
}
