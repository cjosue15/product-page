import React from 'react';

import { ButtonTypeEnum, ButtonWrapperProps } from '../models/button.model';
import { ButtonWrapper } from '../styles/styled-components.styles';

export const Button = ({ children, type, styles }: ButtonWrapperProps) => {
  return (
    <ButtonWrapper styles={styles} primary={type !== ButtonTypeEnum.PRIMARY ? false : true}>
      {children}
    </ButtonWrapper>
  );
};
