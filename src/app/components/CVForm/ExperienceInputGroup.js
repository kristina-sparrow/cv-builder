import React from "react";
import InputField from "./InputField";

export default function ExperienceInputGroup({
  item,
  index,
  onInputArrayChange,
  onItemDelete,
  onItemAdd,
}) {
  const { id, company, position, startDate, endDate, description } = item;
  return (
    <div className="exp-group">
      <InputField
        type="text"
        name="company"
        placeholder="Company"
        value={company}
        onChange={onInputArrayChange("experience", index)}
      />
      <InputField
        type="text"
        name="position"
        placeholder="Position"
        value={position}
        onChange={onInputArrayChange("experience", index)}
      />
      <InputField
        type="text"
        name="start-date"
        placeholder="Start Date"
        value={startDate}
        onChange={onInputArrayChange("experience", index)}
      />
      <InputField
        type="text"
        name="end-date"
        placeholder="End Date"
        value={endDate}
        onChange={onInputArrayChange("experience", index)}
      />

      <InputField
        type="text"
        name="description"
        placeholder="Description"
        value={description || ""}
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
