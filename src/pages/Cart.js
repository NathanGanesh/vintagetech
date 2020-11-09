import React from 'react';
import { CartContext } from '../context/cart';
import EmptyCart from '../components/EmptyCart';
import CartItem from '../components/CartItem';
import Button from '../components/Button';

export default function Cart() {
	let user = false;
	const { cart, total } = React.useContext(CartContext);

	if (cart.length === 0) {
		return (
			<div className="filter-section">
				<EmptyCart />
			</div>
		);
	}
	return (
		<div className="cart-section">
			<h2>Your Cart</h2>
			<div className="cart-items">
				{cart.map((item) => {
					return <CartItem cartProductInfo={item} key={item.id} />;
				})}
				<h2 style={{ paddingBottom: '20px' }}>Total : $ {total}</h2>

				{user ? (
					<Button text={'Login'} width={'500px'} heigth={'60px'} fontSize={'26px'} link="/login" />
				) : (
					<Button text={'checkout'} width={'500px'} heigth={'60px'} fontSize={'26px'} link="/checkout" />
				)}
			</div>
		</div>
	);
}
