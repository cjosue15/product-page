import React, { useState } from 'react';
import styled from 'styled-components';

import ProductViewer from '../components/Product/ProductViewer';
import { ProductInformation } from '../components/Product/ProductInformation';
import ProductAmmount from '../components/Product/ProductAmmount';
import { ProductAdd } from '../components/Product/ProductAdd';
import { Wrapper } from '../styles/styled-components.styles';

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 950px);
  justify-content: center;
`;

const ProductColumns = styled.div`
  display: grid;
  grid-template-columns: 25rem 1fr;
  gap: 7rem;
  align-items: center;
`;

const ProductSummary = styled.div`
  /* display: fle; */
`;

const ModalViewer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);

  display: grid;
  grid-template-columns: 31.25rem;
  justify-content: center;
  align-items: center;
`;

const Product = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleModalViewer = (mustShow: boolean) => {
    setShow(mustShow);
  };

  return (
    <>
      <Wrapper>
        <ProductWrapper>
          <ProductColumns>
            <ProductViewer handleModalViewer={handleModalViewer} isModalViewer={false} />
            <ProductSummary>
              <ProductInformation />
              <ProductAmmount />
              <ProductAdd />
            </ProductSummary>
          </ProductColumns>
        </ProductWrapper>
      </Wrapper>

      {show && (
        <ModalViewer>
          <ProductViewer handleModalViewer={handleModalViewer} isModalViewer={true} />
        </ModalViewer>
      )}
    </>
  );
};

export default Product;
