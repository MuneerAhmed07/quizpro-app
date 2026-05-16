import { Subject } from "../../../src/types";
import { allPakStudyMcqsQuizes } from "./AllMCQs";
import { importantMcqsQuize } from "./ImportantMCQs";

export const pakstudy: Subject = {
  id: "pakstudy",
  subject: "Pak Study",
  icon: "Book",
  topics: [
    {
      id: "allmcqs",
      name: "Pak Study",
      quizzes: allPakStudyMcqsQuizes,
    },
    {
      id: "importantMCQs",
      name: "Most Important And Most Repeated MCQs In PPSC, FPSC FIA",
      quizzes: importantMcqsQuize,
    }
  ]
};