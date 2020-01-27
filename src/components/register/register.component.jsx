import React, { Component } from 'react';
import './register.style.css';
import Input from './../input/input.component';
import Button from '../button/button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class Register extends Component {
	state = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	};
	handleSubmit = async (e) => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			console.log('password no match!');
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (error) {
			console.log(error);
		}
	};
	handleOnChange = (target) => {
		const { name, value } = target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="register-page">
				<h2>I don't have an account</h2>
				<p>Sign up with your email and password</p>
				<form onSubmit={this.handleSubmit}>
					<Input
						formType="register"
						type="text"
						name="displayName"
						label="Display Name"
						onChange={(e) => this.handleOnChange(e.currentTarget)}
						value={displayName}
						required
					/>
					<Input
						formType="register"
						type="text"
						name="email"
						label="Email"
						onChange={(e) => this.handleOnChange(e.currentTarget)}
						value={email}
						required
					/>
					<Input
						formType="register"
						type="password"
						name="password"
						label="Password"
						onChange={(e) => this.handleOnChange(e.currentTarget)}
						value={password}
						required
					/>
					<Input
						formType="register"
						type="password"
						name="confirmPassword"
						label="Confirm Password"
						onChange={(e) => this.handleOnChange(e.currentTarget)}
						value={confirmPassword}
						required
					/>
					<Button type="submit" label="Sign up" name="btn-register" />
				</form>
			</div>
		);
	}
}

export default Register;
