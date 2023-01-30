import { v4 as uuidv4 } from "uuid";

const sampleCV = {
  personalInfo: {
    name: "Kristina Sparrow",
    title: "Web Developer",
    phone: "123.456.7890",
    email: "email@email.com",
    location: "Denver, CO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  experience: [
    {
      id: uuidv4(),
      position: "Senior Software Developer",
      company: "A Tech Company",
      startDate: "January 2023",
      endDate: "Present",
      description:
        "Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud.",
    },
    {
      id: uuidv4(),
      position: "Junior Software Developer",
      company: "A Tech Company",
      startDate: "January 2020",
      endDate: "December 2022",
      description:
        "Irure dolor incididunt sint et ullamco. Commodo laboris amet aliquip incididunt do ut est exercitation reprehenderit magna sit laboris est mollit.",
    },
  ],
  education: [
    {
      id: uuidv4(),
      course: "Full Stack JavaScript",
      school: "The Odin Project",
      completionDate: "February 2023",
      description: "",
    },
    {
      id: uuidv4(),
      course: "CS50: Introduction to Computer Science",
      school: "Harvard University",
      completionDate: "December 2022",
      description: "",
    },
    {
      id: uuidv4(),
      course: "Responsive Web Design",
      school: "FreeCodeCamp",
      completionDate: "January 2023",
      description: "",
    },
    {
      id: uuidv4(),
      course: "JavaScript Algorithms and Data Structures",
      school: "FreeCodeCamp",
      completionDate: "January 2023",
      description: "",
    },
  ],
};

export default sampleCV;
