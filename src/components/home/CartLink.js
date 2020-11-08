import React from 'react';
import { CartContext } from '../../context/cart';
import { Link } from 'react-router-dom';

export default function CartLink() {
	const { cartItems } = React.useContext(CartContext);
	return (
		<Link className="main-link" to="/cart">
			<li>
				Cart
				<span className="cart-amount">{cartItems}</span>
			</li>
		</Link>
	);
}
