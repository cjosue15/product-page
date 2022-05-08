import React from 'react';
import styled from 'styled-components';

import ProductViewer from '../components/Product/ProductViewer';
import { ProductInformation } from '../components/Product/ProductInformation';
import ProductAmmount from '../components/Product/ProductAmmount';
import { ProductAdd } from '../components/Product/ProductAdd';
import { Wrapper } from '../styles/styled-components.styles';

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 900px);
  justify-content: center;
`;

const ProductColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ProductSummary = styled.div`
  display: grid;
`;

const Product = () => {
  return (
    <Wrapper>
      <ProductWrapper>
        <ProductColumns>
          <ProductViewer />
          <ProductSummary>
            <ProductInformation />
            <ProductAmmount />
            <ProductAdd />
          </ProductSummary>
        </ProductColumns>
      </ProductWrapper>
    </Wrapper>
  );
};

export default Product;
