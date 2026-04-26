import { ictInfrastructureQuiz } from "./ICTInfrastructure";
import { advanceNetworking } from "./advancedNetworking";
import { basicNeworkingQuiz } from "./basicNetworking";
import { intermediateNeworkingQuiz } from "./intermediateNetworking";
import { subnettingQuiz } from "./subnetting";


export const networkingQuizzes = [
  // Basic Networkings
  ...basicNeworkingQuiz,

  // Intermediate Networking
  ...intermediateNeworkingQuiz,

  // Advance Networking
  ...advanceNetworking,

  // ICT Infrastructure
  ...ictInfrastructureQuiz,

  // Subnetting
  ...subnettingQuiz,
];