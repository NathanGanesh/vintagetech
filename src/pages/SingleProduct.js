import React from 'react';
import { CartContext } from '../context/cart';
import { ProductContext } from '../context/Products';
import { useParams, useHistory } from 'react-router-dom';
import Loading from '../components/Loading';
import Button from '../components/Button';

export default function SingleProduct() {
	const { products, loading } = React.useContext(ProductContext);
	const { addToCart } = React.useContext(CartContext);
	const { id } = useParams();
	const history = useHistory();
	let product = products.find((item) => {
		return parseInt(item.id) === parseInt(id);
	});

	console.log(product);
	if (loading) {
		return <Loading />;
	}
	return (
		<div className="single-product">
			<div className="single-product-container">
				<img src={product.image} alt="single product" />
			</div>
			<div>
				<h2>{product.title}</h2>
				<h3>$ {product.price}</h3>
				<p>{product.description}</p>
				<div
					className="add-to-cart"
					onClick={() => {
						addToCart(product);
						history.push('/cart');
					}}
				>
					<Button text={'Add to cart'} width={'500px'} heigth={'40px'} fontSize={'26px'} link="/cart" />
				</div>
			</div>
		</div>
	);
}
