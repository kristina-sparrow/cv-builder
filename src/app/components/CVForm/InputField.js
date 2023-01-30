import React from "react";

export default function InputField({
  type,
  name,
  placeholder,
  value,
  onChange,
}) {
  const id = `input-${name.split(" ").join("-")}`;
  return (
    <label htmlFor={id}>
      <span className="hidden">{name}</span>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
