import React from "react";
import InputField from "./InputField";

export default function EducationInputGroup({
  education,
  onChange,
  onAdd,
  onDelete,
}) {
  const educationItems = education.map((educationItem) => (
    <EducationItem
      key={educationItem.id}
      id={educationItem.id}
      educationItem={educationItem}
      onChange={onChange}
      onDelete={onDelete}
    ></EducationItem>
  ));
  return (
    <section className="form-section">
      <h2 className="section-title">Education</h2>
      {educationItems}
      <button className="btn-add" onClick={onAdd}>
        Add
      </button>
    </section>
  );
}

function EducationItem({ id, educationItem, onChange, onDelete }) {
  return (
    <div className="group">
      <InputField
        type="text"
        name="course"
        placeholder="Course / Program"
        value={educationItem.course}
        onChange={(e) => onChange(e, id)}
      />
      <InputField
        type="text"
        name="school"
        placeholder="School"
        value={educationItem.school}
        onChange={(e) => onChange(e, id)}
      />
      <InputField
        type="text"
        name="completionDate"
        placeholder="Completion Date"
        value={educationItem.completionDate}
        onChange={(e) => onChange(e, id)}
      />
      <InputField
        type="text"
        name="description"
        placeholder="Description"
        value={educationItem.description}
        onChange={(e) => onChange(e, id)}
      />
      <button className="btn-delete" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
