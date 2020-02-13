import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.action';

import HomePage from './pages/home-page/home-page';
import ShopPage from './pages/shop-page/shop-page';
import Notfound from './pages/not-found/not-found-page';
import LoginRegister from './pages/login-register-page/login-register-page';
import Header from './components/header/header.component';
import './App.css';
import CheckOutPage from './pages/checkout-page/checkout-page';

class App extends Component {
	unSubscribeFromAuth = null;

	componentDidMount() {
		const { checkUserSession } = this.props;
		checkUserSession();
	}

	componentWillUnmount() {
		this.unSubscribeFromAuth();
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<Switch>
					<Route path="/checkout" component={CheckOutPage} />
					<Route path="/shop" component={ShopPage} />
					<Route
						exact
						path="/login"
						render={() => (this.props.currentUser ? <Redirect to="/" /> : <LoginRegister />)}
					/>
					<Route path="/not-found" component={Notfound} />
					<Route exact path="/" component={HomePage} />
					<Redirect to="not-found" />
				</Switch>
			</React.Fragment>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
