import React from "react";

export default function InputField({ label, value, id, name, onChange }) {
  if (!id) {
    id = `input--${label.split(" ").join("-")}`;
  }
  return (
    <label htmlFor={id}>
      <span className="hidden">{label}</span>
      <input
        type="text"
        id={id}
        value={value}
        placeholder={label}
        name={name}
        onChange={onChange}
      />
    </label>
  );
}
