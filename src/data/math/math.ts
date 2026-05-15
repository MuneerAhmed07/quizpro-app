import { Subject } from "../../../src/types";
import { allPercentageQuize } from "./percentage";
import { allRatioAndProportionQuize } from "./ratio&proportion";

export const math: Subject = {
  id: "math",
  subject: "Mathematics",
  icon: "Book",
  topics: [
    {
      id: "allmcqs",
      name: "Ratio and Proportion",
      quizzes: allRatioAndProportionQuize,
    },
    {
      id: "percentage",
      name: "Percentage MCQs",
      quizzes: allPercentageQuize,
    }
    
  ]
};