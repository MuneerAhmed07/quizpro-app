import { Subject } from "../../../src/types";
import { dataStructureQuizes } from "./dataStructure";
import { networkingQuizzes } from "./networking";
import { operatingSystemQuizes } from "./operatingSystem";
import { programmingQuizzes } from "./programming";
import { basicSoftwareAndToolsQuizes } from "./softwareAndTool";

export const computer: Subject = {
  id: "computer",
  subject: "Computer Science",
  icon: "Monitor",
  topics: [
    {
      id: "networking",
      name: "Networking",
      quizzes: networkingQuizzes
    },
    {
      id: "programming",
      name: "Programming",
      quizzes: programmingQuizzes
    },
    {
      id: "operatingsystem",
      name: "Operating System",
      quizzes: operatingSystemQuizes,
    },
    {
      id: "datastructure",
      name: "Data Structure",
      quizzes: dataStructureQuizes,
    },
    {
      id: "softwareandtool",
      name: "Software And Tools Awareness",
      quizzes: basicSoftwareAndToolsQuizes,
    }
  ]
};