import { Subject } from "../../../src/types";
import { allDesertsMCQs } from "./desert";
import { allMountainRelatedMCQs } from "./moutain";
import { allProvincesMCQs } from "./provinces";
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
    },
    {
      id: "deserts",
      name: "Deserts of Pakistan MCQs",
      quizzes: allDesertsMCQs,
    },
    {
      id: "provinces",
      name: "Pakistan All Provinces MCQs",
      quizzes: allProvincesMCQs,
    }
]
};