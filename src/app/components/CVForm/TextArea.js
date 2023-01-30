import React from "react";

export default function TextAreaField({ name, placeholder, value, onChange }) {
  const id = `text-area-${name.split(" ").join("-")}`;
  return (
    <label htmlFor={id}>
      <span className="hidden">{name}</span>
      <textarea
        rows={5}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
