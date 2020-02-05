import React, { Component } from 'react';
import Input from './../input/input.component';
import Button from '../button/button.component';
import './login.style.css';
import { auth, signInWithGoogle } from './../../firebase/firebase.utils';

class Login extends Component {
	state = {
		email: '',
		password: ''
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		// CALL TO BACKEND SERVICE
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log(error);
			alert(error.message);
		}
	};

	handleOnChange = (target) => {
		const { name, value } = target;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className="login-page">
				<h2>I already have an account</h2>
				<p>Sign in with your email and password</p>
				<form onSubmit={this.handleSubmit}>
					<Input
						formType="login"
						type="text"
						name="email"
						label="Email"
						onChange={(e) => this.handleOnChange(e.currentTarget)}
						value={this.state.email}
						required
					/>
					<Input
						formType="login"
						type="password"
						name="password"
						label="Password"
						onChange={(e) => this.handleOnChange(e.currentTarget)}
						value={this.state.password}
						required
					/>
					<div className="btn-group">
						<Button type="submit" label="Login" name="btn-login" />
						<Button
							type="submit"
							onClick={signInWithGoogle}
							label="Sign In With Google"
							name="btn-login-google"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
