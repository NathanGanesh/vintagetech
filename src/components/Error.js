import React from 'react';
import Button from '../components/Button';
export default function Error() {
	return (
		<div className="error-container">
			<h2>Oops! It's A Dead End</h2>
			<Button text={'Back Home'} width={'100px'} heigth={'40px'} fontSize={'12px'} link="/" />
		</div>
	);
}
