// user context
import React from 'react';

const UserContext = React.createContext();
function getUser() {
	return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : { username: null, token: null };
}

function UserProvider({ children }) {
	const [ user, setUser ] = React.useState(getUser);

	const userLogin = (user) => {
		setUser(user);
		localStorage.setItem('user', JSON.stringify(user));
	};

	const userLogout = () => {
		setUser({ username: null, token: null });
		localStorage.removeItem('user');
	};

	const [ alert, setAlert ] = React.useState({
		show: false,
		msg: '',
		type: 'success'
	});

	const showAlert = ({ msg, type = 'succes' }) => {
		setAlert({ show: true, msg, type });
	};

	const hideAlert = () => {
		setAlert({ ...alert, show: false });
	};

	return (
		<UserContext.Provider value={{ alert, showAlert, hideAlert, user, userLogin, userLogout }}>
			{children}
		</UserContext.Provider>
	);
}

export { UserContext, UserProvider };
