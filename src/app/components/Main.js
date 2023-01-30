import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CVForm from "./CVForm";
import CVPreview from "./CVPreview";
import emptyCV from "../data/emptyCV";

export default function Main() {
  const [cv, setCV] = useState(emptyCV);

  function handleChangePersonal(e) {
    const { name, value } = e.target;
    setCV((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  }

  function handleChangeExperience(e, id) {
    const { name, value } = e.target;
    setCV((prevState) => {
      const newExperience = prevState.experience.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value };
        }
        return experienceItem;
      });
      return { ...prevState, experience: [...newExperience] };
    });
  }

  function handleAddExperience() {
    setCV((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: uuidv4(),
          position: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }));
  }

  function handleDeleteExperience(id) {
    setCV((prevState) => {
      const newExperience = prevState.experience.filter(
        (experienceItem) => experienceItem.id !== id
      );
      return { ...prevState, experience: [...newExperience] };
    });
  }

  function handleChangeEducation(e, id) {
    const { name, value } = e.target;
    setCV((prevState) => {
      const newEducation = prevState.education.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
      return { ...prevState, education: [...newEducation] };
    });
  }

  function handleAddEducation() {
    setCV((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uuidv4(),
          course: "",
          school: "",
          completionDate: "",
          description: "",
        },
      ],
    }));
  }

  function handleDeleteEducation(id) {
    setCV((prevState) => {
      const newEducation = prevState.education.filter(
        (educationItem) => educationItem.id !== id
      );
      return { ...prevState, education: [...newEducation] };
    });
  }

  return (
    <main>
      <CVForm
        cv={cv}
        onChangePersonal={handleChangePersonal}
        onChangeExperience={handleChangeExperience}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience}
        onChangeEducation={handleChangeEducation}
        onAddEducation={handleAddEducation}
        onDeleteEducation={handleDeleteEducation}
      />
      <CVPreview cv={cv} />
    </main>
  );
}
