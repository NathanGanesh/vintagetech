import React from 'react';
import ProductsFilter from '../components/products/ProductFilter';
import ProductItems from '../components/products/ProductsItems';
import { ProductContext } from '../context/Products.js';
import Loading from '../components/Loading';

export default function Product() {
	const { loading } = React.useContext(ProductContext);
	if (loading) {
		return <Loading />;
	}
	return (
		<div>
			<h2 className="search-product">Search Products</h2>
			<ProductsFilter />
			<ProductItems />
		</div>
	);
}
