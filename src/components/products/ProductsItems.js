import React from 'react';
import Loading from '../Loading';
import { ProductContext } from '../../context/Products';
import ProductList from '../ProductList';

export default function ProductsItems() {
	const { loading, sorted, page } = React.useContext(ProductContext);
	if (loading) {
		return <Loading />;
	}

	return <ProductList products={sorted[page]} />;
}
