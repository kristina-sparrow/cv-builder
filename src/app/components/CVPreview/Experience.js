import React from "react";

export default function Experience({ heading, experienceList }) {
  return (
    <div className="experience-list">
      {heading ? <h3>{heading}</h3> : null}
      {experienceList.map((item, index) => {
        const { position, company, startDate, endDate, desc } = item;
        return (
          <ExperienceItem
            key={index}
            heading={position}
            place={company}
            startDate={startDate}
            endDate={endDate}
            desc={desc}
          />
        );
      })}
    </div>
  );
}

function ExperienceItem({ heading, place, startDate, endDate, desc }) {
  return (
    <div className="experience">
      <div className="experience__heading">
        <h4>{heading}</h4>
        <div className="experience__details">
          {place} |{" "}
          <span className="bold">
            {startDate} – {endDate}
          </span>
        </div>
      </div>
      {desc ? desc : null}
    </div>
  );
}
