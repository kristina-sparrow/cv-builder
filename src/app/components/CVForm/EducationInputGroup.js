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
        type="text"
        name="course"
        placeholder="Course/program"
        value={course}
        onChange={onInputArrayChange("education", index)}
      />
      <InputField
        type="text"
        name="school"
        placeholder="School"
        value={school}
        onChange={onInputArrayChange("education", index)}
      />
      <InputField
        type="text"
        name="completion-date"
        placeholder="Completion date"
        value={completionDate}
        onChange={onInputArrayChange("education", index)}
      />
      <InputField
        type="text"
        name="description"
        placeholder="Description"
        value={desc || ""}
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
