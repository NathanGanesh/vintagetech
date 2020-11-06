import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';

export default function Home() {
	return (
		<div>
			<Hero />
			<h2 style={{ textAlign: 'center' }}>Featured products</h2>
			<FeaturedProducts />
		</div>
	);
}
