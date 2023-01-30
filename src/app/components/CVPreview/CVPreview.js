import React from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";

export default function CVPreview() {
  return (
    <div>
      <Personal />
      <Education />
      <Experience />
    </div>
  );
}
