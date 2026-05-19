import { Subject } from "../../../src/types";
import { allComputerQuize } from "./computer";
import { allLDCPastPaperQuize } from "./LDC";
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
    },
    {
      id: "ldcpastpaper",
      name: "LDC Past Paper",
      quizzes: allLDCPastPaperQuize,
    }
  ]
};