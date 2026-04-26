import { assistantQuizes } from "./assistant";
import { allconstablequizes } from "./constable";
import { allFiaAct01 } from "./fiaAct";


export const allPastPaperQuizes = [
    ...assistantQuizes,
    ...allFiaAct01,
    ...allconstablequizes,
];