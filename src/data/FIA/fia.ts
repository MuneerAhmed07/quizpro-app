import { Subject } from "../../../src/types";
import { allComputerMcqsQuizes } from "./computerQuestion";
import { allMcqsQuizes } from "./mostexpected";
import { allMostImportantQuize } from "./mostImportant";
import { allPastPaperQuizes } from "./pastpaper";


export const fia: Subject = {
  id: "fia",
  subject: "FIA",
  icon: "BookOpenText",
  topics: [
    {
      id: "mostexpected",
      name: "FIA Most Expected Question",
      quizzes: allMcqsQuizes,
    },
    {
      id: "pastpaper",
      name: "All Past Paper",
      quizzes: allPastPaperQuizes,
    },
    {
      id: "computermcqs",
      name: "Computer MCQS",
      quizzes: allComputerMcqsQuizes,
    },
    {
      id: "mostimportant",
      name: "FIA Most Important And Repeated MCQs",
      quizzes: allMostImportantQuize,
    }
  ]
};