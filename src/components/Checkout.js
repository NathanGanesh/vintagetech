import React, { useState } from 'react';
import { UserContext } from '../context/user';
import { CartContext } from '../context/cart';
import { useHistory } from 'react-router-dom';
import EmptyCart from '../components/EmptyCart';

import submitOrder from '../strapi/submitOrder';

export default function Checkout(props) {
	const { cart, total, clearCart } = React.useContext(CartContext);
	const { user, showAlert, hideAlert, alert } = React.useContext(UserContext);
	const history = useHistory();

	const [ name, setName ] = useState('');
	const [ error, setError ] = useState('');
	const isEmpty = !name || alert.show;

	async function handleSubmit(e) {
		e.preventDefault();
	}

	if (cart.length < 1) return <EmptyCart />;
	return (
		<section className="search-product">
			<h3 style={{ paddingBottom: '20px' }}>Checkout</h3>
			<form className="formWrapper">
				<p className="order-total">
					Order total : <span className="order-total-span"> ${total}</span>
				</p>
				<div className="signWrapper">
					<label htmlFor="name">Your Name</label>
					<input
						type="text"
						name="name"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
					<p className="credit-title">Credit Or Debit Card</p>
					<div className="credit-card-description">
						<p>
							Test Using This Credit Card : <span className="order-total-span">4242 4242 4242 4242</span>
						</p>
						<p>Enter any 5 Digits For The Zip Code</p>
						<p>Enter any 3 Digits For The CVC</p>
					</div>
				</div>
				{error && <p className="card-error">{error}</p>}

				{isEmpty ? (
					<p className="card-error">Please Fill Out Name Field</p>
				) : (
					<button type="submit" className="btn-submit" onClick={handleSubmit}>
						submit
					</button>
				)}
			</form>
		</section>
	);
}
