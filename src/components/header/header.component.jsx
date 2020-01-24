import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/4.3 crown.svg.svg';
import './header.style.css';
import { auth } from './../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
	return (
		<header className="header">
			<div className="logo-container">
				<Link to="/">
					<img alt="Logo" src={Logo} />
				</Link>
			</div>
			<div className="options">
				<Link className="option" to="/">
					Home
				</Link>
				<Link className="option" to="/shop">
					Shop
				</Link>
				<Link className="option" to="/contact">
					Contact
				</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						Logout
					</div>
				) : (
					<Link className="option" to="/login">
						Login
					</Link>
				)}
			</div>
		</header>
	);
};

export default Header;
