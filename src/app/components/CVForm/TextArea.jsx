import React from "react";

export default function TextAreaField({ name, placeholder, value, onChange }) {
  return (
    <textarea
      rows={5}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
