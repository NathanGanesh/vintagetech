import React from 'react';
import { Link } from 'react-router-dom';

export default function Product({ info }) {
	return (
		<article className="product-article">
			<div className="img-container">
				<img src={info.image} alt="image" />

				<button className="btn-detail">
					<Link to={`product/${info.id}`} className="main-link">
						details
					</Link>
				</button>
			</div>
			<div className="product-flex">
				<p className="product-title">{info.title}</p>
				<p className="product-price">$ {info.price}</p>
			</div>
		</article>
	);
}
