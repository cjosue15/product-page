import { ReactNode } from 'react';
import { Interpolation } from 'styled-components';

export const enum ButtonTypeEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface ButtonWrapperProps {
  children: ReactNode;
  type?: ButtonTypeEnum;
  styles?: Interpolation<React.CSSProperties>;
}
