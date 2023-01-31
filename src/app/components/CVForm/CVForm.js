import React from "react";
import PersonalInputGroup from "./PersonalInputGroup";
import ExperienceInputGroup from "./ExperienceInputGroup";
import EducationInputGroup from "./EducationInputGroup";

export default function CVForm({
  cv,
  onChangePersonal,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
}) {
  return (
    <div className="cv-form">
      <form>
        <PersonalInputGroup
          personalInfo={cv.personalInfo}
          onChange={onChangePersonal}
        />
        <ExperienceInputGroup
          experience={cv.experience}
          onChange={onChangeExperience}
          onAdd={onAddExperience}
          onDelete={onDeleteExperience}
        />
        <EducationInputGroup
          education={cv.education}
          onChange={onChangeEducation}
          onAdd={onAddEducation}
          onDelete={onDeleteEducation}
        />
      </form>
    </div>
  );
}
