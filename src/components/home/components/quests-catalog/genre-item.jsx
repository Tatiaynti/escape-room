import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import * as S from './quests-catalog.styled';
import { Genres, GenresTranslation } from 'const.js';
import { useDispatch } from 'react-redux';
import { setGenre } from 'store/actions.js';

const GenresImage = {
  [Genres.AllQuests]: <IconAllQuests />,
  [Genres.Adventures]: <IconAdventures />,
  [Genres.Horrors]: <IconHorrors />,
  [Genres.Mystic]: <IconMystic />,
  [Genres.Detective]: <IconDetective />,
  [Genres.SciFi]: <IconScifi />,
}

const GenreItem = ({genre, isActiveGenre}) => {
  const dispatch = useDispatch();
  const handleGenreClick = () => dispatch(setGenre(Genres[genre]));

  return (
  <S.TabItem>
    <S.TabBtn isActive={isActiveGenre} onClick={handleGenreClick}>
    {GenresImage[genre]}
      <S.TabTitle>{GenresTranslation[genre]}</S.TabTitle>
    </S.TabBtn>
  </S.TabItem>
  )
};

export default GenreItem;
