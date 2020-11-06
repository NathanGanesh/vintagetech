import React from 'react';
import ProductsFilter from '../components/products/ProductFilter';
import ProductItems from '../components/products/ProductsItems';
export default function Product() {
	return (
		<div>
			<h2 className="search-product">Search Products</h2>
			<ProductsFilter />
			<ProductItems />
		</div>
	);
}
