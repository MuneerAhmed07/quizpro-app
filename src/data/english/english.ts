import { Subject } from "../../../src/types";
import { allPrepositionMCQs } from "./prepositions";

export const english: Subject = {
  id: "english",
  subject: "English",
  icon: "BookOpenText",
  topics: [
    {
      id: "prepositions",
      name: "All Preposition MCQs",
      quizzes: allPrepositionMCQs,
    }
    
  ]
};