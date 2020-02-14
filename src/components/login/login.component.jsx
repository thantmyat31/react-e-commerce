import React, { useState } from 'react';
import Input from './../input/input.component';
import Button from '../button/button.component';
import './login.style.css';
import { googleSigninStart, emailSigninStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';

const Login = ({ emailSigninStart, googleSigninStart }) => {
	const [ userCredentials, setUserCredentials ] = useState({ email: '', password: '' });
	const { email, password } = userCredentials;

	const handleSubmit = async (e) => {
		e.preventDefault();
		// CALL TO BACKEND SERVICE
		emailSigninStart(email, password);
	};

	const handleOnChange = (target) => {
		const { name, value } = target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className="login-page">
			<h2>I already have an account</h2>
			<p>Sign in with your email and password</p>
			<form onSubmit={handleSubmit}>
				<Input
					formType="login"
					type="text"
					name="email"
					label="Email"
					onChange={(e) => handleOnChange(e.currentTarget)}
					value={userCredentials.email}
					required
				/>
				<Input
					formType="login"
					type="password"
					name="password"
					label="Password"
					onChange={(e) => handleOnChange(e.currentTarget)}
					value={userCredentials.password}
					required
				/>
				<div className="btn-group">
					<Button type="submit" label="Login" name="btn-login" />
					<Button
						type="button"
						onClick={googleSigninStart}
						label="Sign In With Google"
						name="btn-login-google"
					/>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	googleSigninStart: () => dispatch(googleSigninStart()),
	emailSigninStart: (email, password) => dispatch(emailSigninStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(Login);
