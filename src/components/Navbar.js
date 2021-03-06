import React from 'react';
import logo from '../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import CartLink from './home/CartLink';
import { UserContext } from '../context/user';
import { CartContext } from '../context/cart';

export default function Navbar() {
	const { user, userLogout } = React.useContext(UserContext);
	const { clearCart } = React.useContext(CartContext);
	const history = useHistory();
	return (
		<nav className="main-nav-bar">
			<img src={logo} alt="img" className="main-logo" />
			<div className="main-flex-section">
				<ul className="nav-bar-items-right">
					<Link className="main-link" to="/">
						<li>Home</li>
					</Link>
					<Link className="main-link" to="/about">
						<li>About</li>
					</Link>
					<Link className="main-link" to="/products">
						<li>Products</li>
					</Link>
					{user.token != null && (
						<Link className="main-link" to="/checkout">
							<li>checkout</li>
						</Link>
					)}
				</ul>

				<ul className="nav-bar-items-left">
					{user.token == null ? (
						<Link className="main-link" to="/login">
							<li>login</li>
						</Link>
					) : (
						<li
							style={{ cursor: 'pointer' }}
							onClick={() => {
								userLogout();
								clearCart();
								history.push('/login');
							}}
						>
							logout
						</li>
					)}

					<CartLink />
				</ul>
			</div>
		</nav>
	);
}
