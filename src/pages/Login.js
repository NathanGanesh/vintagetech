import React from 'react';
import { useHistory } from 'react-router-dom';

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
			console.log(isMember);
			isMember ? setUsername('default') : setUsername('');
			return isMember;
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="loginWrapper">
			{isMember ? <h2>Sign in</h2> : <h2>Register</h2>}
			<form className="formWrapper">
				<div>
					<div className="signWrapper">
						<label htmlFor="email">Email</label>
						<input name="email" onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div className="signWrapper">
						<label htmlFor="password">Password</label>
						<input name="password" onChange={(e) => setPassword(e.target.value)} />
					</div>
					{!isMember && (
						<div className="signWrapper">
							<label htmlFor="username">Username</label>
							<input name="username" onChange={(e) => setUsername(e.target.value)} />
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
