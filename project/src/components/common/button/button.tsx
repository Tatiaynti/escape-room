import React from 'react';
import * as S from './button.styled';

function Button ({children, ...props}: any): JSX.Element {
  return <S.Button {...props}>{children}</S.Button>;
}

export default Button;
