import { Subject } from "../types";
import { subjects } from "../data";

const cache: Record<string, Subject> = {};

export async function fetchSubjectData(subjectId: string): Promise<Subject> {
  if (cache[subjectId]) {
    return cache[subjectId];
  }

  const data = subjects[subjectId];

  if (!data) {
    throw new Error(`Subject not found: ${subjectId}`);
  }

  cache[subjectId] = data;
  return data;
}