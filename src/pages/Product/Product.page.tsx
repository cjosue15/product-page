import React, { useState } from 'react';

import { Wrapper } from '../../styles/styled-components.styles';
import { Product } from '../../models/product.model';
import { ProductAdd, ProductAmmount, ProductInformation, ProductViewer } from '../../components/Product';
import { ProductContext } from '../../context/product.context';
import { ProductColumns, ProductWrapper, ProductSummary, ModalViewer } from './product.styled';
import { productsDefault } from './constants/product.constants';

const ProductPage = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleModalViewer = (mustShow: boolean) => {
    setShow(mustShow);
  };

  const [products] = useState<Product[]>(productsDefault);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ProductContext.Provider value={{ products, activeIndex, setActiveIndex }}>
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
    </ProductContext.Provider>
  );
};

export default ProductPage;
