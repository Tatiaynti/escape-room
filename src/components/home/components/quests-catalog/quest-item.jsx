import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { AppRoute, QuestLevelTranslation } from 'const.js';
import { generatePath } from 'react-router';
import * as S from './quests-catalog.styled';

const QuestItem = ({id, title, previewImg, level, peopleCount}) => {
  const [minPeopleCount, maxPeopleCount] = peopleCount;

  return (
    <S.QuestItem>
    <S.QuestItemLink to={generatePath(AppRoute.QuestPage, {id: id})}>
      <S.Quest>
        <S.QuestImage
          src={previewImg}
          width="344"
          height="232"
          alt={title}
        />

        <S.QuestContent>
          <S.QuestTitle>{title}</S.QuestTitle>

          <S.QuestFeatures>
            <S.QuestFeatureItem>
              <IconPerson />
              {minPeopleCount}–{maxPeopleCount} чел
            </S.QuestFeatureItem>
            <S.QuestFeatureItem>
              <IconPuzzle />
              {QuestLevelTranslation[level]}
            </S.QuestFeatureItem>
          </S.QuestFeatures>
        </S.QuestContent>
      </S.Quest>
    </S.QuestItemLink>
  </S.QuestItem>
  );
};

export default QuestItem;
