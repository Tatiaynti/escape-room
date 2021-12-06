const AppRoute = {
  Main: '/',
  QuestPage: '/detailed-quest/:id',
  Contacts: '/contacts',
};

const ActionType = {
  LoadQuests: 'data/loadQuests',
  LoadCurrentQuest: 'data/loadCurrentQuest',
  SetGenre: 'catalog/setGenre',
}

const Genres = {
  AllQuests: 'AllQuests',
  Adventures : 'Adventures',
  Horrors: 'Horrors',
  Mystic: 'Mystic',
  Detective: 'Detective',
  SciFi: 'Scifi',
};

const GenresTranslation = {
  [Genres.AllQuests]: 'Все квесты',
  [Genres.Adventures]: 'Приключения',
  [Genres.Horrors]: 'Ужасы',
  [Genres.Mystic]: 'Мистика',
  [Genres.Detective]: 'Детектив',
  [Genres.SciFi]: 'Sci-fi',
}

const QuestLevelTranslation = {
  'easy' : 'Простой',
  'medium' : 'Средний',
  'hard' : 'Сложный',
}

export {AppRoute, ActionType, Genres, GenresTranslation, QuestLevelTranslation};
