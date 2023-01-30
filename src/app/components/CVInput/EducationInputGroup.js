import React from "react";
import InputField from "./InputField";

export default function EducationInputGroup({
  item,
  index,
  onInputArrayChange,
  onItemDelete,
  onItemAdd,
}) {
  const { id, course, school, completionDate, desc } = item;
  return (
    <div key={index} className="group">
      <InputField
        label="course / program"
        value={course}
        name="course"
        onChange={onInputArrayChange("education", index)}
      />
      <InputField
        label="school"
        value={school}
        name="school"
        onChange={onInputArrayChange("education", index)}
      />
      <InputField
        label="completion date"
        value={completionDate}
        name="completionDate"
        onChange={onInputArrayChange("education", index)}
      />
      <InputField
        label="description"
        value={desc || ""}
        name="desc"
        onChange={onInputArrayChange("education", index)}
      />
      <div className="btn-group">
        <button
          className="btn-delete"
          onClick={() => onItemDelete("education", id)}
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
