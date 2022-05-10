import React from 'react';
import styled from 'styled-components';

const ProductInformationWrapper = styled.div`
  margin-bottom: 1rem;
`;

const SubTitle = styled.h5`
  color: var(--orange);
  font-size: var(--font-h5);
  line-height: var(--font-h5);
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
`;

const Title = styled.h1`
  color: var(--very-dark-blue);
  font-size: var(--font-h1);
  line-height: var(--font-h1);
  margin-top: 1rem;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: 1023px) {
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
  }
`;

const Description = styled.p`
  color: var(--very-dark-blue);
  font-size: var(--font-normal);
  line-height: 1.5rem;
`;

export const ProductInformation = () => {
  return (
    <ProductInformationWrapper>
      <SubTitle>Sneaker Company</SubTitle>
      <Title>Fall Limited Edition Sneakers</Title>
      <Description>
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
        they'll withstand everything the weather can offer.
      </Description>
    </ProductInformationWrapper>
  );
};
