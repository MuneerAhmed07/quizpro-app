import { Subject } from "../../../src/types";
import { allPrepositionMCQs } from "./prepositions";
import { allSynonymMCQs } from "./synonym";

export const english: Subject = {
  id: "english",
  subject: "English",
  icon: "BookOpenText",
  topics: [
    {
      id: "prepositions",
      name: "All Preposition MCQs",
      quizzes: allPrepositionMCQs,
    },
    {
      id: "synonym-antonym",
      name: "Synonym And Antonym",
      quizzes: allSynonymMCQs,
    }
    
  ]
};