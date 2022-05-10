import styled from 'styled-components';

export const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 950px);
  justify-content: center;
`;

export const ProductColumns = styled.div`
  display: grid;
  grid-template-columns: 25rem 1fr;
  gap: 7rem;
  align-items: center;
`;

export const ProductSummary = styled.div`
  /* display: fle; */
`;

export const ModalViewer = styled.div`
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
