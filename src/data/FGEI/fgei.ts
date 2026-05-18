import { Subject } from "../../../src/types";
import { allComputerQuize } from "./computer";
import { estPastPaperQuize } from "./SSTPastpaper";

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
    {
      id: "estPastPaper",
      name: "EST Past Paper",
      quizzes: estPastPaperQuize,
    }
  ]
};