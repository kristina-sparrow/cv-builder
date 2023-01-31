import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";

export default function Personal({ personalInfo }) {
  return (
    <div className="personal-view">
      <div className="heading-view">
        <div className="name-title">
          <h1>{personalInfo.name}</h1>
          <h2>{personalInfo.title}</h2>
        </div>
        <div className="personal-details-group">
          <ContactDetails
            text={personalInfo.phone}
            icon={<BsTelephoneFill />}
          />
          <ContactDetails text={personalInfo.email} icon={<MdEmail />} />
          <ContactDetails text={personalInfo.location} icon={<ImLocation />} />
        </div>
        <p className="personal-description">
          {personalInfo.description ? personalInfo.description : null}
        </p>
      </div>
    </div>
  );
}

function ContactDetails({ icon, text }) {
  return (
    <div className="contact-details">
      {icon}
      <span className="details-text">{text}</span>
    </div>
  );
}
