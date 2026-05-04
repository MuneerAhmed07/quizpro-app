import { computer } from "./computer/computer";
import { Subject } from "../types";
import { fia } from "./FIA/fia";
import { islamic } from "./islamic/islamic";
import { mod } from "./minstryofDefense/mod";
import { ppsc } from "./ppsc/ppsc";
import { pakstudy } from "./pakStudy/pakstudy";
import { english } from "./english/english";
import { pakistanhistory } from "./pakistanHistory/pakistanhistory";

export const subjects: Record<string, Subject> = {
  computer,
  fia,
  islamic,
  mod,
  ppsc,
  pakstudy,
  english,
  pakistanhistory,
};