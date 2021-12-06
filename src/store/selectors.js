import { Genres } from "const.js";
import { createSelector } from "reselect";

const getCurrentGenre = (state) => state.currentGenre;
const getQuests = (state) => state.quests;
const getCurrentQuest = (state) => state.currentQuest;

// const getQuestsByGenre = createSelector(
//   getQuests,
//   getCurrentGenre,
//   (quests, currentGenre) => {
//     if(currentGenre === Genres.AllQuests){
//       return quests;
//     }
//     return quests.filter((quest) => quest.type === Genres[currentGenre]);
//   }
// );

const getQuestsByGenre = createSelector(
  [getQuests, getCurrentGenre],
  (quests, genre) => {
    if (genre === Genres.AllQuests) {
      return quests;
    }

    return quests.filter((quest) => quest.type === genre);
  },
);

export {getCurrentQuest, getCurrentGenre, getQuestsByGenre};
