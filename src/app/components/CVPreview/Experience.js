import React from "react";

export default function Experience({ experience }) {
  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItem key={experienceItem.id} experienceItem={experienceItem} />
  ));
  return (
    <div className="experience-group-view">
      <h3 className="view-section-title">Work Experience</h3>
      {experienceItems}
    </div>
  );
}

function ExperienceItem({ experienceItem }) {
  return (
    <div className="experience-item-view">
      <div className="experience-heading">
        <h4>{experienceItem.position}</h4>
        <div className="experience-details">
          {experienceItem.company} |
          <span className="bold">
            {experienceItem.startDate} – {experienceItem.endDate}
          </span>
        </div>
      </div>
      <p className="experience-description">
        {experienceItem.description ? experienceItem.description : null}
      </p>
    </div>
  );
}
