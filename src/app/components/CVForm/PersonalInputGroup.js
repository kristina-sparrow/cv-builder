import React from "react";
import InputField from "./InputField";
import TextAreaField from "./TextArea";

export default function PersonalInputGroup({ personalInfo, onChange }) {
  return (
    <section className="form-section">
      <h2 className="section-title">Personal Details</h2>
      <div className="group">
        <InputField
          type="text"
          name="name"
          placeholder="Full name"
          value={personalInfo.name}
          onChange={(e) => onChange(e)}
        />
        <InputField
          type="text"
          name="title"
          placeholder="Title"
          value={personalInfo.title}
          onChange={(e) => onChange(e)}
        />
        <InputField
          type="text"
          name="phone"
          placeholder="Phone number"
          value={personalInfo.phone}
          onChange={(e) => onChange(e)}
        />
        <InputField
          type="text"
          name="email"
          placeholder="Email address"
          value={personalInfo.email}
          onChange={(e) => onChange(e)}
        />
        <InputField
          type="text"
          name="location"
          placeholder="Location"
          value={personalInfo.location}
          onChange={(e) => onChange(e)}
        />
        <TextAreaField
          name="description"
          placeholder="Personal Statement"
          value={personalInfo.description}
          onChange={(e) => onChange(e)}
        />
      </div>
    </section>
  );
}
