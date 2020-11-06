import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Button({ text, width, heigth, fontSize }) {
	return (
		<div>
			<Link className="main-link" to="/products">
				<Button2 width={width} heigth={heigth} fontSize={fontSize}>
					{text}
				</Button2>
			</Link>
		</div>
	);
}

const Button2 = styled.button`
	background: #c02c03;
	width: ${(props) => props.width};
	height: ${(props) => props.heigth};
	font-size: ${(props) => props.fontSize};
	font-family: "Kaushan Script", cursive;
	:hover {
		background: transparent;
		color: #c02c03;
		cursor: pointer;
	}
`;
