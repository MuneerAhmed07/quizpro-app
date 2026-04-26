import { Subject } from "../../../src/types";
import { allIslamicMcqsQuizes } from "./allMcqs";

export const islamic: Subject = {
  id: "islamic",
  subject: "Islamic Study",
  icon: "BookOpenText",
  topics: [
    {
      id: "allmcqs",
      name: "All Islamic MCQs",
      quizzes: allIslamicMcqsQuizes,
    }
    
  ]
};