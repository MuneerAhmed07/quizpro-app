import { Subject } from "../../../src/types";
import { allPakStudyMcqsQuizes } from "./AllMCQs";

export const pakstudy: Subject = {
  id: "pakstudy",
  subject: "Pak Study",
  icon: "Book",
  topics: [
    {
      id: "allmcqs",
      name: "Pak Study",
      quizzes: allPakStudyMcqsQuizes,
    }
    
  ]
};