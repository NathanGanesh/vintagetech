// cart context
import React from 'react';
import reducer from './reducer';
import Alert from '../components/Alert';

function getCartFromLocalStorage() {
	return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
}
export const CartContext = React.createContext();

export default function CartProvider({ children }) {
	const [ cart, setCart ] = React.useState(getCartFromLocalStorage());
	const [ total, setTotal ] = React.useState(0);
	const [ cartItems, setCartItems ] = React.useState(0);

	React.useEffect(
		() => {
			localStorage.setItem('cart', JSON.stringify(cart));
			let newCartItems = cart.reduce((total, cartItem) => {
				return (total += cartItem.amount);
			}, 0);
			setCartItems(newCartItems);

			let newTotal = cart.reduce((total, cartItem) => {
				return (total += cartItem.amount * cartItem.price);
			}, 0);

			setTotal(newTotal.toFixed(2));
		},
		[ cart ]
	);

	const removeItem = (id) => {
		setCart([ ...cart ].filter((item) => item.id !== id));
	};
	const increaseAmount = (id) => {
		const newCart = [ ...cart ].map((item) => {
			return item.id === id ? { ...item, amount: item.amount + 1 } : { ...item };
		});
		setCart(newCart);
	};

	const decreaseAmount = (id, amount) => {
		const newCart = [ ...cart ].map((item) => {
			return item.id === id ? { ...item, amount: item.amount - 1 } : { ...item };
		});
		setCart(newCart);

		if (parseInt(amount) === 1) {
			removeItem(id);
		}
	};
	const addToCart = (product) => {
		const { id, image, title, price } = product;
		const item = [ ...cart ].find((item) => item.id === id);
		if (item) {
			increaseAmount(id);
			return;
		} else {
			let newItem = { id, image, title, price, amount: 1 };
			const newCart = [ ...cart, newItem ];
			setCart(newCart);
		}
	};
	const clearCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{ cart, total, cartItems, removeItem, increaseAmount, decreaseAmount, addToCart, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
}
