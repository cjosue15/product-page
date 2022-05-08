import styled, { css, Interpolation } from 'styled-components';

export const ButtonWrapper = styled.button<{ styles?: Interpolation<React.CSSProperties>; primary?: boolean }>`
  height: 3.5rem;
  border: none;
  border-radius: 0.5rem;
  padding: 0 1rem;
  font-family: inherit;
  font-size: 1rem;
  cursor: pointer;

  background-color: ${(props) => (props.primary ? css`var(--orange)` : css`var(--light-grayish-blue)`)};
  color: ${(props) => (props.primary ? css`var(--white)` : css`var(--very-dark-blue)`)};

  ${({ styles }) => styles}
`;

export const Picture = styled.picture<{ styles?: Interpolation<React.CSSProperties> }>`
  display: inline-block;
  ${({ styles }) => styles}
`;

export const Image = styled.img<{ styles?: Interpolation<React.CSSProperties> }>`
  vertical-align: bottom;
  width: 100%;
  ${({ styles }) => styles}
`;

export const Wrapper = styled.div`
  width: calc(100% - 4rem);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Icon = styled.i<{ styles?: Interpolation<React.CSSProperties> }>`
  display: inline-block;
  ${({ styles }) => styles}
`;
