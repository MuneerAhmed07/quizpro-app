import { a } from "motion/react-client";
import { Subject } from "../../../src/types";
import { allPrepositionMCQs } from "./prepositions";
import { allSynonymMCQs } from "./synonym";
import { allIdiomsMCQs } from "./idiom";
import { allNarrationsQuize } from "./narrations";

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
    },
    {
      id: "change-of-voice-idioms",
      name: "Change of Voice and Idioms",
      quizzes:allIdiomsMCQs,
    },
    {
      id: "narration",
      name: "Narrations MCQs",
      quizzes: allNarrationsQuize,
    }
    
  ]
};