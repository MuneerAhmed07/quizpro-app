import { computer } from "./computer/computer";
import { Subject } from "../types";
import { fia } from "./FIA/fia";
import { islamic } from "./islamic/islamic";

export const subjects: Record<string, Subject> = {
  computer,
  fia,
  islamic,
};