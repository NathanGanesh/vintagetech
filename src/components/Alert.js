import React from 'react';
import { UserContext } from '../context/user';
import { FaWindowClose } from 'react-icons/fa';

export default function Alert() {
	const { alert, hideAlert } = React.useContext(UserContext);

	let css = 'alert';
	if (alert.show) {
		css += ' alert-show';
		if (alert.type === 'danger') {
			css += ' alert-danger';
		}
	}

	return (
		<div className="alert-center">
			<div className={css}>
				<p>{alert.show && alert.msg}</p>
				<button className="alert-close" onClick={hideAlert}>
					<FaWindowClose />
				</button>
			</div>
		</div>
	);
}
