import React, { Component } from 'react';
import './register.style.css';
import Input from './../input/input.component';
import Button from '../button/button.component';

class Register extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	};
	handleSubmit = (e) => {
		e.preventDefault();
	};

	render() {
		return (
			<div className="register-page">
				<h2>I don't have an account</h2>
				<p>Sign up with your email and password</p>
				<form onSubmit={this.handleSubmit}>
					<Input
						formType="register"
						type="text"
						name="name"
						label="Display Name"
						onChange={(e) => this.handleOnChange(e.currentTarget)}
						value={this.state.name}
						required
					/>
					<Input
						formType="register"
						type="text"
						name="email"
						label="Email"
						onChange={(e) => this.handleOnChange(e.currentTarget)}
						value={this.state.email}
						required
					/>
					<Input
						formType="register"
						type="password"
						name="password"
						label="Password"
						onChange={(e) => this.handleOnChange(e.currentTarget)}
						value={this.state.password}
						required
					/>
					<Input
						formType="register"
						type="password"
						name="confirm-password"
						label="Confirm Password"
						onChange={(e) => this.handleOnChange(e.currentTarget)}
						value={this.state.confirmPassword}
						required
					/>
					<Button type="submit" label="Sign up" name="btn-register" />
				</form>
			</div>
		);
	}
}

export default Register;
