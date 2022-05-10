import { createContext } from 'react';
import { Product } from '../models/product.model';

interface IProductContext {
  products: Product[];
  activeIndex: number;
  setActiveIndex: Function;
}

const DEFAULT_PROPS: IProductContext = {
  products: [],
  activeIndex: 0,
  setActiveIndex: () => {},
};

export const ProductContext = createContext<IProductContext>(DEFAULT_PROPS);
