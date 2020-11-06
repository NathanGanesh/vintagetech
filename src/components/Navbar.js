import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
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
				</ul>

				<ul className="nav-bar-items-left">
					<Link className="main-link" to="/login">
						<li>Login</li>
					</Link>
					<Link className="main-link" to="/cart">
						<li>Cart</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
}
