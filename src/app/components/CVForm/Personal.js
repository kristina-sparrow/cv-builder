import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";

export default function Personal({ name, title, phone, email, location }) {
  return (
    <header>
      <div className="heading">
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div className="details-group">
        <ContactDetails text={phone} icon={<FaPhoneSquareAlt />} />
        <ContactDetails text={email} icon={<MdEmail />} />
        <ContactDetails text={location} icon={<ImLocation />} />
      </div>
    </header>
  );
}

function ContactDetails({ icon, text }) {
  return (
    <div className="contact-details">
      {icon ? { icon } : null}
      <span className="details-text">{text}</span>
    </div>
  );
}
