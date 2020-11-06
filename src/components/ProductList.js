import React from 'react';
import Product from './Product';

export default function ProductList({ products }) {
	return (
		<div className="product-grid">
			{products.map((item) => {
				return <Product key={item.id} info={item} />;
			})}
		</div>
	);
}
