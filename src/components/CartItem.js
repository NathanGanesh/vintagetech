import React from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { CartContext } from '../context/cart';
export default function CartItem(props) {
	const { image, price, title, id, amount } = props.cartProductInfo;
	const { removeItem, increaseAmount, decreaseAmount } = React.useContext(CartContext);

	return (
		<div className="cart-item">
			<div className="cart-image">
				<img src={image} alt="ok image" />
			</div>
			<div className="cart-item-description">
				<h3>{title}</h3>
				<h3 className="price">$ {price}</h3>
				<button
					type="button"
					className="item-remove"
					onClick={() => {
						removeItem(id);
					}}
				>
					Remove
				</button>
			</div>
			<div>
				<button
					type="button"
					className="amount-btn"
					onClick={() => {
						increaseAmount(id);
					}}
				>
					<FaAngleUp />
				</button>
				<p className="item-amount">{amount}</p>
				<button
					type="button"
					className="amount-btn"
					onClick={() => {
						decreaseAmount(id, amount);
					}}
				>
					<FaAngleDown />
				</button>
			</div>
		</div>
	);
}
