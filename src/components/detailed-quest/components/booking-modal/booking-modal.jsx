import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { sendNewOrderAction } from 'store/api-actions.js';

const PHONE_LENGTH = 10;

const BookingModal = ({handleCloseBookingBtnClick}) => {
  const dispatch = useDispatch();
  const name = useRef(null);
  const phone = useRef(null);
  const peopleCount = useRef(null);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const orederPost = {
      name: name.current.value,
      peopleCount: Number(peopleCount.current.value),
      phone: phone.current.value,
      isLegal: true
    }
    dispatch(sendNewOrderAction(orederPost, handleCloseBookingBtnClick));
  }

  return (
  <S.BlockLayer>
    <S.Modal>
      <S.ModalCloseBtn onClick={handleCloseBookingBtnClick}>
        <IconClose width="16" height="16" />
        <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
      </S.ModalCloseBtn>
      <S.ModalTitle>Оставить заявку</S.ModalTitle>
      <S.BookingForm
        action="https://echo.htmlacademy.ru"
        method="post"
        id="booking-form"
        onSubmit={handleFormSubmit}
      >
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
          <S.BookingInput
            type="text"
            id="booking-name"
            name="booking-name"
            placeholder="Имя"
            ref={name}
            required
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-phone">
            Контактный телефон
          </S.BookingLabel>
          <S.BookingInput
            type="tel"
            id="booking-phone"
            name="booking-phone"
            placeholder="Телефон"
            ref={phone}
            minLength={PHONE_LENGTH}
            maxLength={PHONE_LENGTH}
            required
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-people">
            Количество участников
          </S.BookingLabel>
          <S.BookingInput
            type="number"
            id="booking-people"
            name="booking-people"
            placeholder="Количество участников"
            ref={peopleCount}
            required
          />
        </S.BookingField>
        <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
        <S.BookingCheckboxWrapper>
          <S.BookingCheckboxInput
            type="checkbox"
            id="booking-legal"
            name="booking-legal"
            required
          />
          <S.BookingCheckboxLabel
            className="checkbox-label"
            htmlFor="booking-legal"
          >
            <S.BookingCheckboxText>
              Я согласен с{' '}
              <S.BookingLegalLink href="#">
                правилами обработки персональных данных и пользовательским
                соглашением
              </S.BookingLegalLink>
            </S.BookingCheckboxText>
          </S.BookingCheckboxLabel>
        </S.BookingCheckboxWrapper>
      </S.BookingForm>
    </S.Modal>
  </S.BlockLayer>
  )
};

export default BookingModal;
