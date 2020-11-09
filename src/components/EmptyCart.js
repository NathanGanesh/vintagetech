import React from 'react';
import Button from './Button';
export default function EmptyCart() {
	return (
		<div className="empty-cart">
			<h2 className="search-product">Empty cart ...</h2>
			<Button text={'Fill in'} width={'250px'} heigth={'60px'} fontSize={'26px'} link="/products" />
		</div>
	);
}
