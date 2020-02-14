import React, { useState } from 'react';
import './register.style.css';
import Input from './../input/input.component';
import Button from '../button/button.component';
import { registerStart } from './../../redux/user/user.action';
import { connect } from 'react-redux';

const Register = ({ registerStart }) => {
	const initialState = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	};
	const [ userCredentials, setuserCredentials ] = useState(initialState);
	const handleSubmit = (e) => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = userCredentials;

		if (password !== confirmPassword) {
			alert('password does not match!');
			return;
		}
		registerStart({ email, password, displayName });
	};
	const handleOnChange = (target) => {
		const { name, value } = target;
		setuserCredentials({ ...userCredentials, [name]: value });
	};

	const { displayName, email, password, confirmPassword } = userCredentials;

	return (
		<div className="register-page">
			<h2>I don't have an account</h2>
			<p>Sign up with your email and password</p>
			<form onSubmit={handleSubmit}>
				<Input
					formType="register"
					type="text"
					name="displayName"
					label="Display Name"
					onChange={(e) => handleOnChange(e.currentTarget)}
					value={displayName}
					required
				/>
				<Input
					formType="register"
					type="text"
					name="email"
					label="Email"
					onChange={(e) => handleOnChange(e.currentTarget)}
					value={email}
					required
				/>
				<Input
					formType="register"
					type="password"
					name="password"
					label="Password"
					onChange={(e) => handleOnChange(e.currentTarget)}
					value={password}
					required
				/>
				<Input
					formType="register"
					type="password"
					name="confirmPassword"
					label="Confirm Password"
					onChange={(e) => handleOnChange(e.currentTarget)}
					value={confirmPassword}
					required
				/>
				<Button type="submit" label="Sign up" name="btn-register" />
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	registerStart: (userCredentials) => dispatch(registerStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(Register);
