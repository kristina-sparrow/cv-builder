import React from "react";
import InputField from "./InputField";

export default function ExperienceInputGroup({
  experience,
  onChange,
  onAdd,
  onDelete,
}) {
  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItem
      key={experienceItem.id}
      id={experienceItem.id}
      experienceItem={experienceItem}
      onChange={onChange}
      onDelete={onDelete}
    />
  ));
  return (
    <section className="form-section">
      <h2 className="section-title">Work Experience</h2>
      {experienceItems}
      <button className="btn-add" onClick={onAdd}>
        Add
      </button>
    </section>
  );
}

function ExperienceItem({ id, experienceItem, onChange, onDelete }) {
  return (
    <div className="experience-item">
      <InputField
        type="text"
        name="company"
        placeholder="Company"
        value={experienceItem.company}
        onChange={(e) => onChange(e, id)}
      />
      <InputField
        type="text"
        name="position"
        placeholder="Position"
        value={experienceItem.position}
        onChange={(e) => onChange(e, id)}
      />
      <InputField
        type="text"
        name="start-date"
        placeholder="Start Date"
        value={experienceItem.startDate}
        onChange={(e) => onChange(e, id)}
      />
      <InputField
        type="text"
        name="end-date"
        placeholder="End Date"
        value={experienceItem.endDate}
        onChange={(e) => onChange(e, id)}
      />

      <InputField
        type="text"
        name="description"
        placeholder="Description"
        value={experienceItem.description || ""}
        onChange={(e) => onChange(e, id)}
      />
      <button className="btn-delete" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
