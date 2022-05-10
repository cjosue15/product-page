import React from 'react';
import styled from 'styled-components';

const ProductAmmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const DiscountedPrice = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const RealPrice = styled.small`
  display: inline-block;
  color: var(--grayish-blue);
`;

const Price = styled.span`
  display: inline-block;
  color: var(--very-dark-blue);
  font-size: 1.5rem;
  margin-right: 1.5rem;
`;

const Discount = styled.span`
  display: inline-block;
  color: var(--orange);
  background-color: var(--pale-orange);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

export const ProductAmmount = () => {
  return (
    <ProductAmmountWrapper>
      <DiscountedPrice>
        <Price>$125.00</Price>
        <Discount>50%</Discount>
      </DiscountedPrice>
      <RealPrice>$250.00</RealPrice>
    </ProductAmmountWrapper>
  );
};
