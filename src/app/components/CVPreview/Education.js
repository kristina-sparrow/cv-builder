import React from "react";

export default function Education({ heading, educationList }) {
  return (
    <div className="education-list">
      {heading ? <h3>{heading}</h3> : null}
      {educationList.map((item, index) => {
        const { course, school, completionDate, desc } = item;
        return (
          <EducationItem
            key={index}
            heading={course}
            place={school}
            completionDate={completionDate}
            desc={desc}
          />
        );
      })}
    </div>
  );
}

function EducationItem({ heading, place, completionDate, desc }) {
  return (
    <div className="education">
      <div className="education__heading">
        <h4>{heading}</h4>
        <div className="education__details">
          {place} | <span className="bold">{completionDate}</span>
        </div>
      </div>
      {desc ? desc : null}
    </div>
  );
}
