import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import next from '../../assets/images/icon-next.svg';
import previous from '../../assets/images/icon-previous.svg';
import close from '../../assets/images/icon-close.svg';

import { Image, Picture } from '../../styles/styled-components.styles';
import { Product } from '../../models/product.model';

const ProductViewerWrapper = styled.div``;

const ProductViewerSingle = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const ProductViewerList = styled.div<{ isModalViewer: boolean }>`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding-right: ${(props) => props.isModalViewer && css`3rem`};
  padding-left: ${(props) => props.isModalViewer && css`3rem`};
`;

const Viewer = styled.div<{ active?: boolean }>`
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border: ${(props) => props.active && css`3px solid var(--orange)`};

  ${({ active }) =>
    active &&
    css`
      &::before {
        content: '';
        position: absolute;
        background: rgba(255, 255, 255, 0.5);
        width: 100%;
        height: 100%;
      }
    `}
`;

const Arrow = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--white);
  border: none;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  &.next {
    right: calc(-2.5rem / 2);
  }

  &.previous {
    left: calc(-2.5rem / 2);
  }

  img {
    width: 0.65rem;
  }
`;

const Close = styled.button`
  position: absolute;
  border: none;
  padding: 0;
  top: -2.75rem;
  right: 0;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 1.25rem;
  }
`;

const ProductViewer = ({
  handleModalViewer,
  isModalViewer,
}: {
  handleModalViewer: (mustShow: boolean) => void;
  isModalViewer: boolean;
}) => {
  const [products] = useState<Product[]>([
    {
      id: 0,
      thumbnailPath: 'image-product-1-thumbnail.jpg',
      singlePath: 'image-product-1.jpg',
      name: 'Producto 1',
    },
    {
      id: 1,
      thumbnailPath: 'image-product-2-thumbnail.jpg',
      singlePath: 'image-product-2.jpg',
      name: 'Producto 2',
    },
    {
      id: 2,
      thumbnailPath: 'image-product-3-thumbnail.jpg',
      singlePath: 'image-product-3.jpg',
      name: 'Producto 3',
    },
    {
      id: 3,
      thumbnailPath: 'image-product-4-thumbnail.jpg',
      singlePath: 'image-product-4.jpg',
      name: 'Producto 4',
    },
  ]);

  const [activeProduct, setActiveProduct] = useState<Product>({
    id: 0,
    thumbnailPath: 'image-product-1-thumbnail.jpg',
    singlePath: 'image-product-1.jpg',
    name: 'Producto 1',
  });

  return (
    <ProductViewerWrapper>
      <ProductViewerSingle onDoubleClick={() => handleModalViewer(true)}>
        {isModalViewer && (
          <>
            <Close onClick={() => handleModalViewer(false)}>
              <Image src={close} />
            </Close>
            <Arrow className='previous'>
              <Image src={previous} />
            </Arrow>
            <Arrow className='next'>
              <Image src={next} />
            </Arrow>
          </>
        )}
        <Viewer>
          <Picture>
            <Image src={require(`../../assets/images/${activeProduct.singlePath}`)} alt='Product' />
          </Picture>
        </Viewer>
      </ProductViewerSingle>
      <ProductViewerList isModalViewer={isModalViewer}>
        {products.map((thumbnail) => (
          <Viewer
            key={thumbnail.id}
            active={thumbnail.id === activeProduct.id}
            onClick={() => setActiveProduct(thumbnail)}
          >
            <Picture>
              <Image src={require(`../../assets/images/${thumbnail.thumbnailPath}`)} alt={thumbnail.name} />
            </Picture>
          </Viewer>
        ))}
      </ProductViewerList>
    </ProductViewerWrapper>
  );
};

export default ProductViewer;
