import { v4 as uuidv4 } from "uuid";

const emptyCV = {
  personalInfo: {
    name: "",
    title: "",
    phone: "",
    email: "",
    location: "",
    description: "",
  },
  experience: [
    {
      id: uuidv4(),
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ],
  education: [
    {
      id: uuidv4(),
      course: "",
      school: "",
      completionDate: "",
      description: "",
    },
  ],
};

export default emptyCV;
