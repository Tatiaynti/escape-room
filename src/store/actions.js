import { createAction } from "@reduxjs/toolkit";
import { ActionType } from "const.js";

const setGenre = createAction(
  ActionType.SetGenre,
  (genre) => ({
    payload: {currentGenre: genre},
  }),
);

const setQuests = createAction(
  ActionType.LoadQuests,
  (quests) => ({
    payload: {quests: quests},
  }),
);

const setCurrentQuest = createAction(
  ActionType.LoadCurrentQuest,
  (quest) => ({
    payload: {currentQuest: quest},
  }),
);

export {setGenre, setQuests, setCurrentQuest};
