import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';

export default function Home() {
	return (
		<div>
			<Hero />
			<h2 className="search-product">Featured products</h2>
			<FeaturedProducts />
		</div>
	);
}
