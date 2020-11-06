import React from 'react';
import loading from '../assets/loading.gif';

export default function Loading() {
	return (
		<div className="loading">
			<img src={loading} alt="big time loading" />
			<h2>Loading...</h2>
		</div>
	);
}
