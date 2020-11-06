import React from 'react';
import mainBcg from '../assets/mainBcg.jpeg';
import Button from '../components/Button';
export default function Hero() {
	return (
		<div>
			<img src={mainBcg} alt="main background" className="main-hero-img" />
			<div className="hero">
				<h2>Think, Code, Deploy</h2>
				<h3>Embrace your choices - we do</h3>
				<Button text={'our products'} width={'250px'} heigth={'60px'} fontSize={'26px'} />
			</div>
		</div>
	);
}
