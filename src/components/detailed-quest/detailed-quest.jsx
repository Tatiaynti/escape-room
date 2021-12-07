import { useEffect, useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useSelector } from 'react-redux';
import { getCurrentQuest } from 'store/selectors.js';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { fetchCurrentQuestAction } from 'store/api-actions.js';
import { GenresTranslation, QuestLevelTranslation } from 'const.js';

const DetailedQuest = () => {
  const dispatch = useDispatch();

  const currentQuest = useSelector(getCurrentQuest);
  const params = useParams();
  const currentQuestId = params.id;

  useEffect(() => {
    dispatch(fetchCurrentQuestAction(currentQuestId));
  }, [dispatch, currentQuestId])

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  console.log(currentQuest);

  console.log(currentQuest.peopleCount);

  // const [minPeopleCount, maxPeopleCount] = currentQuest.peopleCount;
  // console.log(minPeopleCount, maxPeopleCount);

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${currentQuest.coverImg}`}
          alt={currentQuest.title}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{currentQuest.title}</S.PageTitle>
            <S.PageSubtitle>{GenresTranslation[currentQuest.type]}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{currentQuest.duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle> чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{QuestLevelTranslation[currentQuest.level]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
            {currentQuest.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
