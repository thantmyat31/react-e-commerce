import React from 'react';
import './login-register.style.css';
import Login from '../../components/login/login.component';
import Register from '../../components/register/register.component';

const LoginRegister = () => {
	return (
		<div className="login-register-page">
			<Login />
			<Register />
		</div>
	);
};

export default LoginRegister;
