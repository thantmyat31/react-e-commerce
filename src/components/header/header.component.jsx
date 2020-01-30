import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from './../../redux/user/user.selector';

import CartIcon from './../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import Logo from '../../assets/4.3 crown.svg.svg';
import { auth } from './../../firebase/firebase.utils';
import './header.style.css';

const Header = ({ currentUser, hidden }) => {
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
				<CartIcon />
			</div>
			{!hidden ? <CartDropdown /> : null}
		</header>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
