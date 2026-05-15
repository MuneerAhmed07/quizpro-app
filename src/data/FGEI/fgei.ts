import { Subject } from "../../../src/types";
import { allComputerQuize } from "./computer";

export const fgei: Subject = {
  id: "fgei",
  subject: "FGEI",
  icon: "BookOpenText",
  topics: [
    {
      id: "allcomputer",
      name: "Computer MCQs",
      quizzes: allComputerQuize,
    },
    
  ]
};