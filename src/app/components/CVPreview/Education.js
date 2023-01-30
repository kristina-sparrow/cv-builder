import React from "react";

export default function Education({ education }) {
  const educationItems = education.map((educationItem) => (
    <EducationItem key={educationItem.id} educationItem={educationItem} />
  ));
  return (
    <div className="education-group-view">
      <h3 className="view-section-title">Education</h3>
      {educationItems}
    </div>
  );
}

function EducationItem({ educationItem }) {
  return (
    <div className="education-item-view">
      <div className="education-heading">
        <h4>{educationItem.course}</h4>
        <div className="education-details">
          {educationItem.school} |
          <span className="bold">{educationItem.completionDate}</span>
        </div>
      </div>
      <p className="education-description">
        {educationItem.description ? educationItem.description : null}
      </p>
    </div>
  );
}
