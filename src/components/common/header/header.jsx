import logo from 'assets/img/logo.svg';
import { AppRoute } from 'const.js';
import { useLocation } from 'react-router';
import * as S from './header.styled';

const Header = () => {
  const params = useLocation();
  const activePathName = params.pathname;

return (
  <S.StyledHeader>
    <S.HeaderWrapper>
      <S.Logo>
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.Logo>

      <S.Navigation>
        <S.Links>
          <S.LinkItem>
            <S.Link $isActiveLink={activePathName === AppRoute.Main} to={AppRoute.Main}>
              Квесты
            </S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link $isActiveLink={activePathName === AppRoute.DevMode} to={AppRoute.DevMode}>Новичкам</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link $isActiveLink={activePathName === AppRoute.DevMode} to={AppRoute.DevMode}>Отзывы</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link $isActiveLink={activePathName === AppRoute.DevMode} to={AppRoute.DevMode}>Акции</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link $isActiveLink={activePathName === AppRoute.Contacts} to={AppRoute.Contacts}>Контакты</S.Link>
          </S.LinkItem>
        </S.Links>
      </S.Navigation>
      <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
  )
};

export default Header;
