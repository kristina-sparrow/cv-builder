import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <p>Built by Kristina Sparrow</p>
      <a
        href="https://github.com/kristina-sparrow"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
    </footer>
  );
}
