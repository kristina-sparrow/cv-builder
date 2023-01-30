import React from "react";
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";

export default function CVPreview({ cv }) {
  return (
    <div className="preview">
      <Personal personalInfo={cv.personalInfo} />
      <Experience experience={cv.experience} />
      <Education education={cv.education} />
    </div>
  );
}
