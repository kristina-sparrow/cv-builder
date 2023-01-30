import React from "react";
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";

export default function CVPreview() {
  return (
    <div>
      <Personal />
      <Experience />
      <Education />
    </div>
  );
}
