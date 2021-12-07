import * as S from './quests-catalog.styled';
import { Genres } from 'const.js';
import { useSelector } from 'react-redux';
import { getCurrentGenre, getQuestsByGenre } from 'store/selectors.js';
import GenreItem from './genre-item.jsx';
import QuestItem from './quest-item.jsx';

const NO_QUESTS = 'В этой категории нет квестов';

const QuestsCatalog = () => {
  const currentGenre = useSelector(getCurrentGenre);
  const quests = useSelector(getQuestsByGenre);

  return (
  <>
    <S.Tabs>
    {Object.values(Genres).map(genre => <GenreItem key={genre} genre={genre} isActiveGenre={currentGenre === genre} />)}
    </S.Tabs>

    <S.QuestsList>
      {quests.length > 0 ?
    quests.map(quest => <QuestItem key={quest.id} id={quest.id} title={quest.title} previewImg={quest.previewImg} level={quest.level} peopleCount={quest.peopleCount}/> )
  : NO_QUESTS
  }
    </S.QuestsList>
  </>
  )
};

export default QuestsCatalog;
