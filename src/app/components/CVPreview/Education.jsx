import React from "react";

export default function Education({ education }) {
  const educationItems = education.map((educationItem) => (
    <EducationItem key={educationItem.id} educationItem={educationItem} />
  ));
  return (
    <div className="view-section">
      <h3 className="view-section-title">Education</h3>
      {educationItems}
    </div>
  );
}

function EducationItem({ educationItem }) {
  return (
    <div className="item-group">
      <div className="item-heading">
        <h4>{educationItem.course}</h4>
        <div className="item-details">
          {educationItem.school} |{" "}
          <span className="bold">{educationItem.completionDate}</span>
        </div>
      </div>
      <p className="item-description">
        {educationItem.description ? educationItem.description : null}
      </p>
    </div>
  );
}
