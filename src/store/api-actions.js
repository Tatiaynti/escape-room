import { ApiPath, Genres } from "const.js";
import { setCurrentQuest, setQuests } from "./actions.js";

const GenresAdapter = {
  'adventures' : Genres.Adventures,
  'horror': Genres.Horrors,
  'mystic': Genres.Mystic,
  'detective': Genres.Detective,
  'sci-fi': Genres.SciFi,
}

const adaptQuestsToClient = (quest) => {
  return {...quest, type : GenresAdapter[quest.type]}
}

const fetchQuestsAction = () =>
  async (dispatch, _getState, api) => {
    await api.get(ApiPath.Quests)
      .then((response) => response.data.map(quest => adaptQuestsToClient(quest)))
      .then((response) => dispatch(setQuests(response)));
  };

const fetchCurrentQuestAction = (questId) =>
  async (dispatch, _getState, api) => {
    await api.get(ApiPath.CurrentQuest(questId))
      .then(response => adaptQuestsToClient(response.data))
      .then(response => dispatch(setCurrentQuest(response)));
  };

const sendNewOrderAction = (orderPost, closeForm) =>
  async (_dispatch, _getState, api) => {
      await api.post(ApiPath.Orders, orderPost)
      .then((response) => {
        if(response){
          closeForm();
        }
      })
  };

export {fetchQuestsAction, fetchCurrentQuestAction, sendNewOrderAction};
