import { Subject } from "../../../src/types";
import { allMountainRelatedMCQs } from "./moutain";
import { allRiversMCQs } from "./rivers";

export const pakistanhistory: Subject = {
  id: "pakistanhistory",
  subject: "Pakistan History Only",
  icon: "BookOpenText",
  topics: [
    {
      id: "mountain",
      name: "Mountain MCQs",
      quizzes: allMountainRelatedMCQs,
    },
    {
      id: "rivers",
      name: "Rivers & Lakes MCQs",
      quizzes: allRiversMCQs,
    }
]
};