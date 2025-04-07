export interface Subproducts {
	id: number;
	parent_product: number;
	position: number;
	ean_13: string | null;
	sku: string;
	article: string;
	weight: number;
	price: string;
	new_price?: string;
	old_price?: string;
	discount_percentage: string;
	size: number;
	length: number | null;
	width: number | null;
	max_length: number;
}

export interface Material {
	id: number;
	is_primary: boolean;
	material: {
		material: string;
		assay: string;
		color: string;
		slug: null | string;
		label: string;
	};
	set_included: boolean;
}

export interface Description {
	text: string;
}

export interface Gemstone {
	id: number;
	gemstone: string;
	color: string;
}

export interface Product {
	id: number;
	category: number;
	subcategory: number;
	name: string;
	slug: string;
	ean_13: string | null;
	sku: string;
	article: string;
	statuses: number[];
	collection: string | null;
	occasions: any[];
	subproducts: Subproducts[];
	images?: string[];
	certificates: any[];
	design: string;
	material: Material[];
	description: Description[];
	gemstone: Gemstone[];
}

export interface ErrorResponse {
	message: string;
}

export interface ProductState {
	product: Product | null;
	loading: boolean;
	error: null | string;
	currentSize: number;
	currentMetalColor: number;
}

export interface RootProductState {
	product: ProductState;
}
