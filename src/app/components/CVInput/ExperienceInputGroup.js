import React from "react";
import InputField from "./InputField";

export default function ExperienceInputGroup({
  item,
  index,
  onInputArrayChange,
  onItemDelete,
  onItemAdd,
}) {
  const { id, company, position, startDate, endDate, desc } = item;
  return (
    <div className="exp-group">
      <InputField
        label="company"
        value={company}
        name="company"
        onChange={onInputArrayChange("experience", index)}
      />
      <InputField
        label="position"
        value={position}
        name="position"
        onChange={onInputArrayChange("experience", index)}
      />
      <InputField
        label="start date"
        value={startDate}
        name="startDate"
        onChange={onInputArrayChange("experience", index)}
      />
      <InputField
        label="end date"
        value={endDate}
        name="endDate"
        onChange={onInputArrayChange("experience", index)}
      />

      <InputField
        label="description"
        value={desc || ""}
        name="desc"
        onChange={onInputArrayChange("experience", index)}
      />
      <div className="btn-group">
        <button
          className="btn-delete"
          onClick={() => onItemDelete("experience", id)}
        >
          Delete
        </button>
        <button className="btn-add" onClick={onItemAdd}>
          Add
        </button>
      </div>
    </div>
  );
}
