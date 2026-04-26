import { Subject } from "../../../src/types";
import { allPastPaperQuizes } from "./pastpaper";


export const mod: Subject = {
  id: "mod",
  subject: "MOD (Ministry of Defense)",
  icon: "BookOpenText",
  topics: [
    {
      id: "modallpastpaper",
      name: "MOD All Past Paper",
      quizzes: allPastPaperQuizes,
    },
    
  ]
};