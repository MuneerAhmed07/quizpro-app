import { a } from "motion/react-client";
import { Subject } from "../../../src/types";
import { allComputerQuize } from "./computer";
import { allLDCPastPaperQuize } from "./LDC";
import { estPastPaperQuize } from "./SSTPastpaper";
import { allUDCPastPaperQuize } from "./UDC";
import { AssistantPastPaper } from "./Assistant/mcqs";

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
    },
    {
      id: "udcpastpaper",
      name: "UDC Past Paper",
      quizzes: allUDCPastPaperQuize,
    },
    {
      id: "assistantpastpaper",
      name: "Assistant Past Paper",
      quizzes: AssistantPastPaper,
    }
  ]
};