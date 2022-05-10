import React from 'react';
import styled, { Interpolation } from 'styled-components';

import { ButtonTypeEnum } from '../../models/button.model';
import { Image } from '../../styles/styled-components.styles';

import { Button } from '../Button';

import plus from '../../assets/images/icon-plus.svg';
import minus from '../../assets/images/icon-minus.svg';

const ProductAddWrapper = styled.div`
  display: grid;
  gap: 1rem;

  @media only screen and (min-width: 1023px) {
    grid-template-columns: 10rem 1fr;
  }
`;

const CounterWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
`;

const Counter = styled.div`
  height: 100%;
  background-color: var(--light-grayish-blue);
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-weight: bold;
  }
`;

const STYLES_BUTTON: Interpolation<React.CSSProperties> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const STYLES_ICON: Interpolation<React.CSSProperties> = {
  width: '0.75rem',
};

export const ProductAdd = () => {
  return (
    <ProductAddWrapper>
      <CounterWrapper>
        <Button styles={{ ...STYLES_BUTTON, borderBottomRightRadius: 0, borderTopRightRadius: 0 }}>
          <Image src={minus} styles={STYLES_ICON} />
        </Button>
        <Counter>
          <span>0</span>
        </Counter>
        <Button styles={{ ...STYLES_BUTTON, borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }}>
          <Image src={plus} styles={STYLES_ICON} />
        </Button>
      </CounterWrapper>
      <Button
        type={ButtonTypeEnum.PRIMARY}
        styles={{ ...STYLES_BUTTON, fontWeight: 'bold', gap: '1rem', boxShadow: '0px 10px 20px -6px var(--orange)' }}
      >
        <svg width='22' height='20' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
            fill='#fff'
          />
        </svg>
        <span>Add to cart</span>
      </Button>
    </ProductAddWrapper>
  );
};
