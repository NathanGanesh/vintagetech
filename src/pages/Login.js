import React from 'react';
import { useHistory } from 'react-router-dom';
import registerUser from '../strapi/registerUser';
import loginUser from '../strapi/loginUser';
export default function Login() {
	const history = useHistory();
	const [ email, setEmail ] = React.useState('');
	const [ password, setPassword ] = React.useState('');
	const [ username, setUsername ] = React.useState('default');
	const [ isMember, setIsMember ] = React.useState(true);

	let isEmpty = !email || !password || !username;

	const toggleMember = (e) => {
		e.preventDefault();
		setIsMember((prevMember) => {
			let isMember = !prevMember;

			isMember ? setUsername('default') : setUsername('');
			return isMember;
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(isMember);
		let response;
		if (isMember) {
			response = await loginUser({ email, password });
		} else {
			response = await registerUser({ email, password, username });
		}
		if (response) {
			console.log('succes');
			console.log(response);
		} else {
		}
	};

	return (
		<div className="loginWrapper">
			{isMember ? <h2>Sign in</h2> : <h2>Register</h2>}
			<form className="formWrapper">
				<div>
					<div className="signWrapper">
						<label htmlFor="email">Email</label>
						<input name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div className="signWrapper">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					{!isMember && (
						<div className="signWrapper">
							<label htmlFor="username">Username</label>
							<input name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
						</div>
					)}

					{!isEmpty && (
						<button type="submit" className="btn-submit" onClick={handleSubmit}>
							submit
						</button>
					)}

					<div className="field-description">
						{isEmpty && <p className="form-empty">Please fill out all form fields</p>}
						<p className="register-link">
							{isMember ? 'Need To Register' : 'Already a member'}
							<button onClick={toggleMember}>Click Here</button>
						</p>
					</div>
				</div>
			</form>
		</div>
	);
}
