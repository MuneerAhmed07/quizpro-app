import { Subject } from "../../../src/types";
import { allIslamicPpscMcqsQuizes } from "./islamicMcqs";


export const ppsc: Subject = {
  id: "ppsc",
  subject: "PPSC (Punjab Public Service Commission)",
  icon: "BookOpenText",
  topics: [
    {
      id: "ppsc",
      name: "PPSC All Islamic Paper",
      quizzes: allIslamicPpscMcqsQuizes,
    },
    
  ]
};