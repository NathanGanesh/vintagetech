import { Route, Switch, BrowserRouter } from 'react-router-dom';
import NavBar from './components/Navbar';
import './index.css';
import React, { Component } from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import About from './pages/About';
import Product from './pages/Product';
import SingleProduct from './pages/SingleProduct';
import Error from './components/Error';
import Login from './pages/Login.js';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/cart" component={Cart} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/about" component={About} />
					<Route exact path="/product/:id" component={SingleProduct} />
					<Route exact path="/products" component={Product} />
					<Route component={Error} />
				</Switch>
			</BrowserRouter>
		);
	}
}
