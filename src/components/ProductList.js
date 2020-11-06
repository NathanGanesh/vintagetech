import React from 'react';
import Product from './Product';

export default function ProductList({ products }) {
	console.log(products);
	if (products === undefined) {
		return <h1 style={{ textAlign: 'center', paddingTop: '20px' }}>No items found</h1>;
	}
	return (
		<div className="product-grid">
			{products.map((item) => {
				return <Product key={item.id} info={item} />;
			})}
		</div>
	);
}
