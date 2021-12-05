// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'components/common/common' or i... Remove this comment to see the full error message
import { MainLayout, PageTitle, PageSubtext } from 'components/common/common';
// import contactsMap from 'assets/img/contacts-map.jpg';
import * as S from './contacts.styled';

const Contacts = () => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <MainLayout>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <S.Main>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <S.ContentWrapper>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <S.PageHeading>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <PageTitle>Контакты</PageTitle>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </S.PageHeading>

        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <S.Contacts>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <S.ContactsList>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <S.ContactTitle>Адрес</S.ContactTitle>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <S.ContactValue>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <S.ContactAddress>
                Санкт-Петербург,
                // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <br />
                Набережная реки Карповка, д 5
              </S.ContactAddress>
            </S.ContactValue>

            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <S.ContactTitle>Режим работы</S.ContactTitle>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <S.ContactValue>Ежедневно, с 9:00 до 20:00</S.ContactValue>

            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <S.ContactTitle>Телефон</S.ContactTitle>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <S.ContactValue>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <S.ContactLink href="tel:8 (800) 333-55-99">
                8 (800) 333-55-99
              </S.ContactLink>
            </S.ContactValue>

            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <S.ContactTitle>E-mail</S.ContactTitle>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <S.ContactValue>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <S.ContactLink href="mailto:info@escape-room.ru">
                info@escape-room.ru
              </S.ContactLink>
            </S.ContactValue>
          </S.ContactsList>

          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <S.ContactsMap>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <S.ContactsMapImage
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.8300125432106!2d30.314303316012083!3d59.9681431666803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696315bcebbd7f3%3A0xe0d833dfef898281!2z0L3QsNCxLiBQ0LXQutC4INCa0LDRgNC_0L7QstC60LgsIDUsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTcwMjI!5e0!3m2!1sru!2sru!4v1638687230911!5m2!1sru!2sru"
              alt="мы находимся по адресу Санкт-Петербург, Набережная реки Карповка, д 5"
              width="649"
              height="336"
            />
          </S.ContactsMap>
        </S.Contacts>
      </S.ContentWrapper>
    </S.Main>
  </MainLayout>
);

export default Contacts;
