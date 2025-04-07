import { RootProductState } from './types';

export const productSelector = (state: RootProductState) => state.product?.product;
export const subproductsSelector = (state: RootProductState) => state.product?.product?.subproducts;
export const materialsSelector = (state: RootProductState) => state.product?.product?.material;
export const imagesSelector = (state: RootProductState) => state.product?.product?.images;

export const currentSizeSelector = (state: RootProductState) => state.product.currentSize;
export const currentMetalColorSelector = (state: RootProductState) =>
	state.product.currentMetalColor;
