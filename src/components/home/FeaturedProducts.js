import React from 'react';
import Loading from '../Loading';
import { ProductContext } from '../../context/Products';
import ProductList from '../ProductList';

export default function FeaturedProducts() {
	const { loading, featured } = React.useContext(ProductContext);

	if (loading) {
		return <Loading />;
	}

	return <ProductList products={featured} />;
}
