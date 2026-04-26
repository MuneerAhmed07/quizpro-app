import { Subject } from "../../../src/types";
import { allMcqsQuizes } from "./mostexpected";
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
    
  ]
};