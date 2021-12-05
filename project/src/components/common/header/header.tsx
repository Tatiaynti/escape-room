// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'assets/img/logo.svg' or its co... Remove this comment to see the full error message
import logo from 'assets/img/logo.svg';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'const.js' or its corresponding... Remove this comment to see the full error message
import { AppRoute } from 'const.js';
import * as S from './header.styled';

const Header = () => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <S.StyledHeader>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <S.HeaderWrapper>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <S.Logo>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.Logo>

      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <S.Navigation>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <S.Links>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <S.LinkItem>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <S.Link $isActiveLink to={AppRoute.Main}>
              Квесты
            </S.Link>
          </S.LinkItem>

          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <S.LinkItem>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <S.Link to="#">Новичкам</S.Link>
          </S.LinkItem>

          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <S.LinkItem>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <S.Link to="#">Отзывы</S.Link>
          </S.LinkItem>

          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <S.LinkItem>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <S.Link to="#">Акции</S.Link>
          </S.LinkItem>

          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <S.LinkItem>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <S.Link to={AppRoute.Contacts}>Контакты</S.Link>
          </S.LinkItem>
        </S.Links>
      </S.Navigation>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
);

export default Header;
