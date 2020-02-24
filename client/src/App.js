import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.action';
import Header from './components/header/header.component';
import './App.css';
import Spinner from './components/spinner/spinner.component';

const HomePage = lazy(() => import('./pages/home-page/home-page'));
const ShopPage = lazy(() => import('./pages/shop-page/shop-page'));
const LoginRegister = lazy(() => import('./pages/login-register-page/login-register-page'));
const CheckOutPage = lazy(() => import('./components/header/header.component'));

const App = ({ checkUserSession, currentUser }) => {
	useEffect(
		() => {
			checkUserSession();
		},
		[ checkUserSession ]
	);

	return (
		<React.Fragment>
			<Header />
			<Switch>
				<Suspense fallback={<Spinner />}>
					<Route exact path="/" component={HomePage} />
					<Route path="/checkout" component={CheckOutPage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/login" render={() => (currentUser ? <Redirect to="/" /> : <LoginRegister />)} />
				</Suspense>
			</Switch>
		</React.Fragment>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
